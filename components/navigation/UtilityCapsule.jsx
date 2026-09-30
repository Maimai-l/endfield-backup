import React from 'react';
const U=[{"vb":"0 0 23 29","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M0.253,28.756 L0.253,18.400 C0.253,15.269 2.716,12.730 5.755,12.730 L17.498,12.730 C20.537,12.730 23.000,15.269 23.000,18.400 L23.000,28.756 L0.253,28.756 ZM11.626,10.982 C8.825,10.982 6.554,8.642 6.554,5.754 C6.554,2.867 8.825,0.527 11.626,0.527 C14.428,0.527 16.699,2.867 16.699,5.754 C16.699,8.642 14.428,10.982 11.626,10.982 Z\"></path>"},{"vb":"0 0 27 30","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M26.273,12.842 L25.645,11.890 L24.903,10.756 L25.645,9.622 L26.273,8.671 L25.645,8.671 L9.058,8.671 L9.058,7.007 L24.432,7.007 L13.186,0.503 L0.726,7.711 L0.726,22.135 L13.186,29.343 L24.432,22.838 L9.058,22.838 L9.058,21.183 L25.645,21.183 L26.273,21.183 L25.645,20.231 L24.903,19.098 L25.645,17.964 L26.273,17.012 L25.645,16.061 L24.903,14.927 L25.645,13.793 L26.273,12.842 ZM4.277,11.062 L6.374,11.062 L6.374,18.783 L4.277,18.783 L4.277,11.062 Z\"></path>"},{"vb":"0 0 20 28","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M7.405,7.332 L7.405,7.367 L0.932,7.367 L0.932,20.633 L7.405,20.633 L7.405,20.667 L19.275,27.718 L19.275,0.281 L7.405,7.332 Z\"></path>"}];
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function UtilityCapsule({buttons,expanded=false,style}){
  const btns=buttons&&buttons.length?buttons:U.map((ic,i)=>({icon:React.createElement(EfSvg,{i:ic}),label:'工具'+(i+1)}));
  const n=btns.length;
  return <div className={'Header_pcHeaderContainer ef-scope'+(expanded?' Header_detailActive':'')} style={{width:expanded?156:30,height:n*30+2,...style}}>
    <div className={'Header_buttonFrameBg Header_ele'+n} style={{height:n*30+2.5}}></div>
    <div className="Header_buttonFrameContainer" style={{height:n*30+2.5}}>
      {btns.map((b,i)=><React.Fragment key={i}>
        {i>0&&<div className="Header_divider" style={{transform:'translate3d(10px,'+(i*30+2)+'px,0)'}}></div>}
        <div className="Header_button" style={{transform:'translate3d(0,'+(i*30+4)+'px,0)'}} onClick={b.onClick}>
          <span className="Header_icon">{b.icon}</span>
          <span className="Header_textWrapper">{b.label}</span>
        </div>
      </React.Fragment>)}
    </div>
  </div>;
}