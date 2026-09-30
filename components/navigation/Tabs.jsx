import React from 'react';
const AR={"vb":null,"body":""};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function Tabs({tabs=[],activeIndex=0,onSelect,style}){
  return <div className="SubpageTab_scroll" style={{width:'auto',...style}}><div className="SubpageTab_subpageTab">
    {tabs.map((t,i)=><React.Fragment key={i}>
      {i>0&&<div className="SubpageTab_divider"></div>}
      <div className={'SubpageTab_tab'+(i===activeIndex?' SubpageTab_active':'')} onClick={()=>onSelect&&onSelect(i)}>
        <span className="SubpageTab_text">{t}</span>
        <span className="SubpageTab_arrow"><EfSvg i={AR} className="SubpageTab_arrowIcon"/></span>
      </div>
    </React.Fragment>)}
  </div></div>;
}