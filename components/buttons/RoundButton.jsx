import React from 'react';
export function RoundButton({direction='next',onClick,style}){
  return <div className="__04-Information_sectionContainer ef-scope" style={style}><div className="__04-Information_infoVideos"><div className="__04-Information_navContainer">
    <div className={'__04-Information_navBtn __04-Information_'+(direction==='prev'?'prev':'next')} onClick={onClick}></div>
  </div></div></div>;
}