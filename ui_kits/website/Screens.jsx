const {HomeButton,DownloadTile,SectionTitle,LabelTag,Pagination,NoticeCard,TitleBlock,HollowText,DividerBand,AvatarChip,TagDate,PlayButton} = window.DesignSystem_e77ad3;

function EfHomeScreen(){
  return <div style={{position:'relative',height:'100%',background:'url(../../assets/textures/bg.jpg) center/cover'}}>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(0,0,0,.35),transparent 45%)'}}></div>
    <div style={{position:'absolute',left:56,bottom:64,display:'flex',flexDirection:'column',gap:18}}>
      <div style={{fontFamily:'Novecentosanswide-Bold',fontSize:64,letterSpacing:-2,lineHeight:1,color:'#fff',textShadow:'0 0 12px rgba(0,0,0,.5)'}}>PRODUCT NAME</div>
      <div style={{fontFamily:'Gilroy-Medium',fontSize:13,color:'#fff',letterSpacing:2}}>INDUSTRIAL DESIGN SYSTEM — SAMPLE SITE</div>
      <HomeButton icon={<img src="../../assets/icons/notice.svg" style={{width:18}}/>}>开始使用</HomeButton>
      <div style={{display:'flex',gap:5}}>
        <DownloadTile>平台 A</DownloadTile>
        <DownloadTile>平台 B</DownloadTile>
        <DownloadTile>PC</DownloadTile>
        <DownloadTile disabled>敬请期待</DownloadTile>
      </div>
    </div>
    <div style={{position:'absolute',right:28,bottom:24}}><img src="../../assets/textures/scroll_tip.png" style={{width:22,opacity:.85}}/></div>
  </div>;
}

function EfArchiveScreen(){
  const items=[{n:'条目 Alpha',type:'类型 A'},{n:'条目 Beta',type:'类型 B'},{n:'条目 Gamma',type:'类型 A'},{n:'条目 Delta',type:'类型 C'}];
  const [i,setI]=React.useState(0);
  const it=items[i];
  return <div style={{position:'relative',height:'100%',background:'#f2f2f2',overflow:'hidden'}}>
    <div style={{position:'absolute',top:24,left:0,width:'100%',overflow:'hidden'}}><HollowText size={96}>ARCHIVE</HollowText></div>
    <div style={{position:'absolute',left:48,top:120}}><SectionTitle en="ARCHIVE" cn="档案"/></div>
    <div style={{position:'absolute',left:'50%',top:'52%',transform:'translate(-50%,-50%)',width:420,height:420,borderRadius:'50%',background:'#d9d9d9',boxShadow:'0 0 24px rgba(0,0,0,.25)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'SpaceGrotesk',fontSize:20,color:'#999'}}>IMAGE SLOT</div>
    <div style={{position:'absolute',left:48,top:220,display:'flex',flexDirection:'column',gap:16}}>
      <div style={{fontFamily:'SansBold',fontSize:40,lineHeight:1}}>{it.n}</div>
      <LabelTag label="类型" value={it.type}/>
      <LabelTag yellow label="标注" value="示例"/>
    </div>
    <div style={{position:'absolute',right:40,top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:12,alignItems:'center'}}>
      {items.map((o,j)=><AvatarChip key={j} active={j===i} onClick={()=>setI(j)}/>)}
    </div>
    <div style={{position:'absolute',left:0,bottom:0,width:'100%'}}><DividerBand subtitle="ARCHIVE FILE" title="档案条目" width="100%"/></div>
  </div>;
}

function EfNoticeScreen(){
  const items=[
    {img:'../../assets/textures/bg.jpg',cat:'公告',date:'2026-01-17',title:'版本更新公告'},
    {img:'../../assets/textures/02Bg.jpg',cat:'活动',date:'2026-01-09',title:'活动情报汇总'},
    {img:'../../assets/textures/tape-wave-bg.png',cat:'情报',date:'2025-12-28',title:'开发进度报告'},
  ];
  const [i,setI]=React.useState(0);
  const it=items[i];
  return <div style={{position:'relative',height:'100%',background:'#fff',padding:'56px 64px',boxSizing:'border-box'}}>
    <SectionTitle en="LATEST NEWS" cn="最新情报"/>
    <div style={{display:'flex',gap:40,marginTop:56,alignItems:'flex-start'}}>
      <NoticeCard image={it.img}/>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:20,minWidth:0}}>
        <TagDate tag={it.cat} date={it.date}/>
        <TitleBlock subtitle={it.cat} time={it.date} title={it.title}/>
        <div style={{display:'flex',gap:16,alignItems:'center'}}>
          <Pagination current={i+1} total={items.length} onPrev={()=>setI((i+items.length-1)%items.length)} onNext={()=>setI((i+1)%items.length)}/>
          <PlayButton/>
        </div>
      </div>
    </div>
    <div style={{position:'absolute',left:0,bottom:0,width:'100%',overflow:'hidden'}}>
      <div style={{height:4,backgroundImage:'var(--color-bar)',width:196,marginLeft:'auto',marginRight:24,marginBottom:12}}></div>
      <HollowText size={72}>LATEST NEWS</HollowText>
    </div>
  </div>;
}

Object.assign(window,{EfHomeScreen,EfOperatorScreen:EfArchiveScreen,EfNoticeScreen});
