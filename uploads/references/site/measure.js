// 同一套量法，用于官网与组件库
module.exports=async function measure(p){
  return await p.evaluate(()=>{
    const vw=innerWidth,vh=innerHeight;
    const vis=e=>{const r=e.getBoundingClientRect();if(r.width<2||r.height<2||r.bottom<0||r.top>vh||r.right<0||r.left>vw)return null;const s=getComputedStyle(e);if(s.visibility==='hidden'||s.display==='none'||+s.opacity<0.05)return null;return [r,s]};
    const clear=c=>!c||c==='transparent'||/rgba\(.*,\s*0\)$/.test(c);
    const fs={},fam={},ctl={},rad={},bgArea={};let painted=0,outlined=0,outlineOnly=0,textured=0,shadowed=0,els=0,chars=0;
    for(const e of document.querySelectorAll('body *')){
      const v=vis(e);if(!v)continue;const [r,s]=v;els++;
      // 文字：按字符数加权
      let n=0;for(const c of e.childNodes)if(c.nodeType===3)n+=c.textContent.trim().length;
      if(n){const k=Math.round(parseFloat(s.fontSize)*2)/2;fs[k]=(fs[k]||0)+n;const f=s.fontFamily.split(',')[0].replace(/["']/g,'').trim();fam[f]=(fam[f]||0)+n;chars+=n}
      const area=Math.min(r.width,vw)*Math.min(r.height,vh);
      if(area>=600){
        const hasBg=!clear(s.backgroundColor),hasImg=s.backgroundImage&&s.backgroundImage!=='none';
        const bw=Math.max(parseFloat(s.borderTopWidth)||0,parseFloat(s.borderLeftWidth)||0,parseFloat(s.borderBottomWidth)||0,parseFloat(s.borderRightWidth)||0);
        const hasBorder=bw>0&&s.borderTopStyle!=='none'&&!clear(s.borderTopColor)||(/inset/.test(s.boxShadow));
        if(hasBg||hasImg){painted++;if(hasBg){bgArea[s.backgroundColor]=(bgArea[s.backgroundColor]||0)+area}}
        if(hasImg&&/url\(/.test(s.backgroundImage))textured++;
        if(hasBorder){outlined++;if(!hasBg&&!hasImg)outlineOnly++}
        if(s.boxShadow!=='none'&&!/inset/.test(s.boxShadow)||/drop-shadow/.test(s.filter))shadowed++;
        if(hasBg||hasBorder||hasImg){const R=Math.min(parseFloat(s.borderTopLeftRadius)||0,Math.min(r.width,r.height)/2);const k=R>=Math.min(r.width,r.height)/2-0.5&&R>0?'full':Math.round(R);rad[k]=(rad[k]||0)+1}
      }
      // 可点击控件的高度
      const t=e.tagName;if((t==='BUTTON'||t==='A'||e.getAttribute('role')==='button'||(s.cursor==='pointer'&&getComputedStyle(e.parentElement).cursor!=='pointer'))&&r.height>=12&&r.height<=160&&r.width<=700){const k=Math.round(r.height);ctl[k]=(ctl[k]||0)+1}
    }
    const top=(o,n)=>Object.entries(o).sort((a,b)=>b[1]-a[1]).slice(0,n);
    return {vw,rem:parseFloat(getComputedStyle(document.documentElement).fontSize),els,chars,fontSizes:top(fs,12),families:top(fam,6),controls:top(ctl,10),radii:top(rad,8),painted,outlined,outlineOnly,textured,shadowed,bg:top(bgArea,8).map(([c,a])=>[c,Math.round(a/(vw*vh)*100)])};
  });
};
