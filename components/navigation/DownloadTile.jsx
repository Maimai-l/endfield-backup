import React from 'react';
export function DownloadTile({children,icon,disabled=false,onClick,style}){
  const cls=['downloader_item',disabled&&'downloader_disabled'].filter(Boolean).join(' ');
  return <div className="ef-scope" style={style}><div className="downloader_platforms"><div className={cls} onClick={onClick}>
    {icon}<span className="downloader_text">{children}</span>
  </div></div></div>;
}