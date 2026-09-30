import React from 'react';
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function Button({children,variant='dark',disabled=false,onClick,style}){
  const cls=['Button_button',variant==='light'&&'Button_light',disabled&&'Button_disabled'].filter(Boolean).join(' ');
  return <button className={cls} style={style} onClick={onClick}><span className="Button_text">{children}</span></button>;
}