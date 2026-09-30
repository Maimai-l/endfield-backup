import React from 'react';
export function TagDate({tag,date,style}){
  return <div className="__04-Information_sectionContainer ef-scope" style={style}><div className="__04-Information_infoCurrent">
    <div className="__04-Information_tagAndDate">
      <span className="__04-Information_tag">{tag}</span>
      <span className="__04-Information_date">{date}</span>
    </div>
  </div></div>;
}