import React from 'react';
export function ColorDeco({kind='block',style}){
  if(kind==='lattice')return <div className="__03-Lore_container ef-scope" style={style}><div className="__03-Lore_lattice"></div></div>;
  if(kind==='line')return <div className="__03-Lore_container ef-scope" style={{width:240,...style}}><div className="__03-Lore_colorLine"></div></div>;
  return <div className="__03-Lore_container ef-scope" style={style}><div className="__03-Lore_colorBlock"></div></div>;
}