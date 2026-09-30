import React from 'react';
export function NoticeCard({image,active=true,onClick,style,children}){
  return <div className="__06-Notice_sectionContainer ef-scope" style={style}>
    <div className={'__06-Notice_noticeItem'+(active?' __06-Notice_active':'')} style={{width:440,height:247.5}} onClick={onClick}>
      <div className="__06-Notice_image" style={image?{backgroundImage:'url('+image+')'}:{backgroundColor:'#d9d9d9'}}></div>
      {children}
    </div>
  </div>;
}