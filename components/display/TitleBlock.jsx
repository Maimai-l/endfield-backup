import React from 'react';
export function TitleBlock({subtitle,time,title,style}){
  return <div className="__06-Notice_sectionContainer ef-scope" style={style}><div className="__06-Notice_titleContainer">
    <div className="__06-Notice_subtitle">{subtitle}{time&&<span className="__06-Notice_time">{time}</span>}</div>
    <div className="__06-Notice_title">{title}</div>
  </div></div>;
}