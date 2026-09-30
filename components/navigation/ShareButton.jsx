import React from 'react';
const SH={"vb":"0 0 32 20","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M0.724,19.567 L0.724,-0.014 L18.789,-0.014 L18.789,3.217 L3.930,3.217 L3.930,16.337 L28.460,16.337 L28.460,12.699 L31.666,12.699 L31.666,19.567 L0.724,19.567 ZM28.460,5.500 L21.148,12.869 L18.881,10.584 L26.193,3.217 L21.526,3.217 L21.526,-0.014 L31.666,-0.014 L31.666,10.203 L28.460,10.203 L28.460,5.500 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function ShareButton({open=false,items=[],onClick,style}){
  return <div className="Header_pcHeaderContainer ef-scope" style={{width:36,...style}}>
    <div className={'Header_buttonShare'+(open?' Header_active':'')} onClick={onClick}>
      <span className="Header_shareIcon"><EfSvg i={SH}/></span>
      {items.length>0&&<div className="Header_shareList"><div className="Header_wrapper">{items.map((it,i)=><span key={i} className="Header_shareItem">{it}</span>)}</div></div>}
    </div>
  </div>;
}