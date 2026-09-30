import React from 'react';
const AR={"vb":"0 0 23 23","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M2.673,22.418 L2.673,19.398 L17.146,19.398 L0.740,2.992 L2.875,0.857 L19.280,17.263 L19.280,2.791 L22.300,2.791 L22.300,22.418 L2.673,22.418 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function SectionTitle({en='LABEL',cn='标题文字',dark=false,style}){
  return <div className="ef-scope" style={style}><div className={'SectionTitle_sectionTitle SectionTitle_active'+(dark?' SectionTitle_dark':'')}>
    <div className="SectionTitle_arrowBlock SectionTitle_active"><div className="SectionTitle_inner"><span className="SectionTitle_arrow"><EfSvg i={AR}/></span><div className="SectionTitle_titleEn">{en}</div></div></div>
    <div className="SectionTitle_titleCn">{cn}</div>
  </div></div>;
}