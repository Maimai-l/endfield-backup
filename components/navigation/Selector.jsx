import React from 'react';
export function Selector({name='选项名称',paging,dots=0,activeDot=0,onPrev,onNext,onDot,style}){
  return <div className="__03-Lore_container ef-scope" style={style}><div className="__03-Lore_info"><div className="__03-Lore_navigation">
    <div className="__03-Lore_navigator">
      <div className="__03-Lore_navBtn __03-Lore_prev" onClick={onPrev}></div>
      <div className="__03-Lore_activeName"><div className="__03-Lore_inner">{paging&&<span className="__03-Lore_paging">{paging}</span>}<span className="__03-Lore_name">{name}</span></div></div>
      <div className="__03-Lore_navBtn __03-Lore_next" onClick={onNext}></div>
    </div>
    {dots>0&&<div className="__03-Lore_naviDots">{Array.from({length:dots}).map((_,i)=><div key={i} className={'__03-Lore_naviDot'+(i===activeDot?' __03-Lore_active':'')} onClick={()=>onDot&&onDot(i)}></div>)}</div>}
  </div></div></div>;
}