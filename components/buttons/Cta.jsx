import React from 'react';
const TRI={"vb":"0 0 31 28","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M23.146,13.962 L15.554,0.843 L30.739,0.843 L23.146,13.962 ZM0.261,0.843 L15.446,0.843 L7.854,13.962 L0.261,0.843 ZM15.554,27.156 L7.961,14.036 L23.146,14.036 L15.554,27.156 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function Cta({label='预约',horizontal=false,horizontalLabel,onClick,style}){
  return <div className={'Header_pcHeaderContainer ef-scope'+(horizontal?' Header_detailActive':'')} style={style}>
    <div className="Header_buttonPreserveBg" onClick={onClick}>
      <div className="Header_bg"></div>
      <span className="Header_tri"><EfSvg i={TRI}/></span>
      <div className="Header_divider"></div>
      <div className="Header_text">{label}</div>
      <div className="Header_divider2"></div>
      <div className="Header_text2">{horizontalLabel||label}</div>
    </div>
  </div>;
}