import React from 'react';
export function PlayButton({onClick,style}){
  return <div className="__04-Information_sectionContainer ef-scope" style={style}><div className="__04-Information_infoCurrent"><div className="__04-Information_buttons">
    <div className="__04-Information_playBtn" onClick={onClick}></div>
  </div></div></div>;
}