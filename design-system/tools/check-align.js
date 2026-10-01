/*
 * 对齐检查：渲染控件预览，按两类规则检查版式。
 *   1. 声明规则：指定两个元素的某条边或中线必须重合，或必须保持最小间距。
 *   2. 近似对齐扫描：同一卡片内可见元素的边或中线相差 1 至 3px 时报出，这类偏差既不是对齐也不是有意错开；
 *      字号不同的两段文字按基线对齐，不比较中线；元素的外层容器已与对方对齐时，视为容器内的内距，不再报出。
 * 用法：node check-align.js <预览服务地址> [控件名 ...]
 * 退出码非零表示存在问题，发布前必须为零。
 */
const {chromium}=require('playwright-core');
const BASE=process.argv[2]||'http://localhost:8765';
const ONLY=process.argv.slice(3);
const RULES=require('./align-rules.js');
const fs=require('fs'),path=require('path');
const DIR=path.join(__dirname,'../project/components');

function edge(r,e){return {left:r.x,right:r.x+r.width,top:r.y,bottom:r.y+r.height,cx:r.x+r.width/2,cy:r.y+r.height/2}[e]}

(async()=>{
  const b=await chromium.launch({executablePath:process.env.CHROMIUM||'/opt/pw-browsers/chromium',args:['--no-sandbox']});
  let fails=0;
  const comps=ONLY.length?ONLY:fs.readdirSync(DIR).filter(c=>c!=='Cover'&&fs.existsSync(path.join(DIR,c,'preview.html')));
  for(const comp of comps){
    for(const theme of ['light','dark']){
      const p=await b.newPage({viewport:{width:960,height:1200},deviceScaleFactor:4});
      await p.goto(`${BASE}/view/${theme}/${comp}`);await p.waitForTimeout(500);
      for(const r of RULES.filter(x=>x.comp===comp)){
        if(r.setup)await p.evaluate(r.setup);await p.waitForTimeout(r.setup?450:0);
        if(r.ink){
          const [host,parts,inv]=r.ink;const H=await p.$(host);if(!H){console.log(`缺少元素  ${comp} ${theme}  ${r.name}`);fails++;continue}
          const S=4;const shot=await H.screenshot({scale:'device'});
          const boxes=await p.evaluate(([h,ps])=>{const H=document.querySelector(h),q0=H.getBoundingClientRect();return [q0.width].concat(ps.map(s=>{const e=H.querySelector(s);if(!e)return null;const q=e.getBoundingClientRect();return [q.left-q0.left,q.right-q0.left]}))},[host,parts]);
          const q=await b.newPage();await q.setContent('<img id=i src="data:image/png;base64,'+shot.toString('base64')+'">');await q.waitForTimeout(100);
          const dark=theme==='dark'?!inv:!!inv;
          const cys=await q.evaluate(([bx,dark])=>{const i=document.getElementById('i'),c=document.createElement('canvas');c.width=i.naturalWidth;c.height=i.naturalHeight;const x=c.getContext('2d');x.drawImage(i,0,0);const d=x.getImageData(0,0,c.width,c.height).data;const S=c.width/bx[0];
            return bx.slice(1).map(b=>{if(!b)return null;let t=1e9,u=-1;for(let X=Math.ceil(b[0]*S)+2;X<Math.floor(b[1]*S)-2;X++)for(let Y=4;Y<c.height-4;Y++){const k=(Y*c.width+X)*4,L=(d[k]+d[k+1]+d[k+2])/3;if(dark?L>150:L<140){t=Math.min(t,Y);u=Math.max(u,Y)}}return u<0?null:(t+u)/2/S})},[boxes,dark]);
          await q.close();
          const ok=cys.filter(v=>v!=null);const spread=Math.max(...ok)-Math.min(...ok);
          if(ok.length<2||spread>0.75){fails++;console.log(`不符合  ${comp} ${theme}  ${r.name}：笔画中心 ${cys.map(v=>v==null?'无':v.toFixed(2)).join(' / ')}`)}
          continue;
        }
        if(r.inset){
          const ins=await p.evaluate(([o,i])=>{const O=document.querySelector(o);if(!O)return null;const I=O.querySelector(i);if(!I)return null;const a=O.getBoundingClientRect(),q=I.getBoundingClientRect(),bw=parseFloat(getComputedStyle(O).borderTopWidth);
            return [q.top-a.top-bw,a.bottom-q.bottom-bw,Math.min(q.left-a.left,a.right-q.right)-bw]},r.inset);
          if(!ins){console.log(`缺少元素  ${comp} ${theme}  ${r.name}`);fails++;continue}
          if(Math.max(...ins)-Math.min(...ins)>0.5){fails++;console.log(`不符合  ${comp} ${theme}  ${r.name}：上 ${ins[0].toFixed(1)}，下 ${ins[1].toFixed(1)}，侧 ${ins[2].toFixed(1)}`)}
          continue;
        }
        const boxes=await p.evaluate(([sc,a,bb])=>{const root=sc?document.querySelector(sc):document;if(!root)return [null,null];return [a,bb].map(s=>{const e=root.querySelector(s);if(!e)return null;const q=e.getBoundingClientRect();return {x:q.x,y:q.y,width:q.width,height:q.height}})},[r.scope||null,r.a,r.b]);
        if(!boxes[0]||!boxes[1]){console.log(`缺少元素  ${comp} ${theme}  ${r.name}`);fails++;continue}
        const ea=edge(boxes[0],r.edgeA||r.edge),eb=edge(boxes[1],r.edgeB||r.edge),d=Math.abs(ea-eb);
        const ok=r.min!=null?d>=r.min:d<=0.5;
        if(!ok){fails++;console.log(`不符合  ${comp} ${theme}  ${r.name}：相差 ${d.toFixed(1)}px`)}
        if(r.teardown)await p.evaluate(r.teardown);
      }
      const near=await p.evaluate(()=>{
        const vis=[...document.querySelectorAll('.stage *')].filter(e=>{const s=getComputedStyle(e),q=e.getBoundingClientRect();
          if(!q.width||!q.height||s.visibility==='hidden'||+s.opacity===0)return false;
          const painted=s.backgroundColor!=='rgba(0, 0, 0, 0)'||parseFloat(s.borderTopWidth)>0||parseFloat(s.borderLeftWidth)>0||e.tagName==='svg'||(e.children.length===0&&e.textContent.trim());
          return painted&&!e.closest('.row-label,.cap,.prov,[role=progressbar]')&&s.animationName==='none'});
        const out=[];
        for(let i=0;i<vis.length;i++)for(let j=i+1;j<vis.length;j++){
          const A=vis[i],B=vis[j];if(A.contains(B)||B.contains(A))continue;
          const a=A.getBoundingClientRect(),b=B.getBoundingClientRect();
          const vClose=a.top<b.bottom+24&&b.top<a.bottom+24,hClose=a.left<b.right+24&&b.left<a.right+24;
          if(!(vClose&&hClose))continue;
          const name=e=>(e.className.baseVal??e.className)||e.tagName.toLowerCase();
          const vOver=a.top<b.bottom&&b.top<a.bottom,hOver=a.left<b.right&&b.left<a.right;
          const isText=e=>e.tagName!=='svg'&&e.children.length===0&&e.textContent.trim();
          const fs=E=>parseFloat(getComputedStyle(E).fontSize);
          const unit=E=>isText(E)&&(fs(E.parentElement)>fs(E)||[...E.parentElement.children].some(x=>x!==E&&isText(x)&&fs(x)>fs(E)));
          const baseline=(isText(A)&&isText(B)&&getComputedStyle(A).fontSize!==getComputedStyle(B).fontSize)||unit(A)||unit(B);
          const nov=e=>/Novecento/.test(getComputedStyle(e).fontFamily)&&getComputedStyle(e).transform!=='none';
          if(vOver&&!hOver&&!baseline&&!nov(A)&&!nov(B)){const d=Math.abs((a.top+a.bottom)/2-(b.top+b.bottom)/2);if(d>=1&&d<=3)out.push(`同行中线 ${d.toFixed(1)}px  ${name(A)} / ${name(B)}`)}
          const viaParent=(E,k,v)=>{let e=E.parentElement;for(let i=0;i<5&&e;i++,e=e.parentElement){const q=e.getBoundingClientRect();if(Math.abs(q[k]-v)<0.5)return true}return false};
          if(hOver&&!vOver){for(const [n,k] of [['左边','left'],['右边','right']]){const x=a[k],y=b[k],d=Math.abs(x-y);if(viaParent(A,k,y)||viaParent(B,k,x))continue;if(k==='right'&&isText(A)&&isText(B))continue;if(d>=1&&d<=3)out.push(`上下${n} ${d.toFixed(1)}px  ${name(A)} / ${name(B)}`)}}
        }
        /* 方圆关系：圆形或胶囊与带明显边界的方形同一行内高度相差不足 4 且间距不足 64，或间距不足 16；或等宽上下相接时报出 */
        const shape=e=>{const s=getComputedStyle(e),q=e.getBoundingClientRect();const r=parseFloat(s.borderTopLeftRadius)||0;
          const bounded=s.backgroundColor!=='rgba(0, 0, 0, 0)'||(parseFloat(s.borderTopWidth)>0&&s.borderTopStyle!=='none'&&s.borderTopColor!=='rgba(0, 0, 0, 0)');
          if(!bounded||q.width<16||q.height<16)return null;return r>=q.height/2-0.5?'round':r<=6?'square':null};
        const ctl=[...document.querySelectorAll('.stage button,.stage .input,.stage .btn,.stage .seg,.stage .tag,.stage .card,.stage .rpill,.stage .rbtn,.stage .cap-btn,.stage .li,.stage .smi')].filter(e=>{const q=e.getBoundingClientRect();return q.width&&q.height&&!e.closest('.row-label,.cap,.prov')});
        for(let i=0;i<ctl.length;i++)for(let j=i+1;j<ctl.length;j++){const A=ctl[i],B=ctl[j];if(A.contains(B)||B.contains(A))continue;
          const sa=shape(A),sb=shape(B);if(!sa||!sb||sa===sb)continue;const a=A.getBoundingClientRect(),b=B.getBoundingClientRect();
          const sameRow=a.top<b.bottom&&b.top<a.bottom,gapX=Math.max(b.left-a.right,a.left-b.right),gapY=Math.max(b.top-a.bottom,a.top-b.bottom);
          const name=e=>(e.className.baseVal??e.className)||e.tagName.toLowerCase();
          if(sameRow&&gapX<64&&(Math.abs(a.height-b.height)<4||gapX<16))out.push(`方圆${Math.abs(a.height-b.height)<4?'同高':'贴近'}并排 间距 ${gapX.toFixed(0)}px  高 ${a.height.toFixed(0)}/${b.height.toFixed(0)}  ${name(A)} / ${name(B)}`);
          if(!sameRow&&gapY<16&&Math.abs(a.width-b.width)<1.5&&Math.abs(a.left-b.left)<1.5)out.push(`方圆等宽相接 间距 ${gapY.toFixed(0)}px  ${name(A)} / ${name(B)}`);
        }
        return [...new Set(out)].slice(0,30)});
      for(const n of near){console.log(`近似对齐  ${comp} ${theme}  ${n}`);fails++}
      await p.close();
    }
  }
  await b.close();
  console.log(fails?`共 ${fails} 处问题`:'全部通过');
  process.exit(fails?1:0);
})();
