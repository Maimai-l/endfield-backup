import React from 'react';
export function BackButton({children='返回列表',onClick,style}){
  return <div className="BackButton_backButton" style={style} onClick={onClick}>{children}</div>;
}