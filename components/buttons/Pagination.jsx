import React from 'react';
const AR={"vb":"0 0 18 27","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M14.142,0.127 L17.753,3.737 L7.963,13.527 L17.753,23.318 L14.142,26.928 L0.743,13.527 L14.142,0.127 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
function Btn({right,disabled,onClick}){
  const cls=['Pagination_button',right&&'Pagination_right',disabled&&'Pagination_disabled'].filter(Boolean).join(' ');
  return <div className={cls} onClick={disabled?undefined:onClick}><div className="Pagination_border"></div><span className={'Pagination_arrow'+(right?' Pagination_right':'')}><EfSvg i={AR}/></span></div>;
}
export function Pagination({dark=false,current,total,onPrev,onNext,prevDisabled=false,nextDisabled=false,style}){
  const num=current!=null&&total!=null;
  const cls=['Pagination_pagination',dark&&'Pagination_dark',num&&'Pagination_number'].filter(Boolean).join(' ');
  return <div className={cls} style={style}>
    <Btn disabled={prevDisabled} onClick={onPrev}/>
    {num&&<div className="Pagination_paginationNumber"><span>{current}</span><span className="Pagination_divider">/</span><span>{total}</span></div>}
    <Btn right disabled={nextDisabled} onClick={onNext}/>
  </div>;
}