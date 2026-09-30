import React from 'react';
const EF=null,COLON=null,DECO=null,HI=null;
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function PageHeader({title='新闻中心',titleEn='NEWS CENTER',brandLine='DESIGN SYSTEM',image='bolt',style}){
  return <div className="SubpageHeader_subpageHeader" style={style}>
    <div className="SubpageHeader_decoHeader">
      <div style={{position:'absolute',left:49,top:10,fontFamily:'Gilroy-Light',fontSize:10,lineHeight:1,whiteSpace:'nowrap'}}>{brandLine}</div>
      <div className="SubpageHeader_icon">{HI?<EfSvg i={HI} style={{width:28,height:28}}/>:null}</div>
      {COLON&&<span className="SubpageHeader_colonSvg"><EfSvg i={COLON}/></span>}
      {EF&&<span className="SubpageHeader_efSvg"><EfSvg i={EF}/></span>}
      <div className="SubpageHeader_titleEn">{titleEn}</div>
      {DECO&&<span className="SubpageHeader_decoSvg"><EfSvg i={DECO}/></span>}
    </div>
    <div className="SubpageHeader_title">{title}</div>
    <div className={'SubpageHeader_image SubpageHeader_'+image}></div>
  </div>;
}