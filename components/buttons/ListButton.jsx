import React from 'react';
export function ListButton({children,onClick,style}){
  return <div className="__02-Operator_sectionContainer ef-scope" style={style}>
    <div className="__02-Operator_listButton" onClick={onClick}>{children}</div>
  </div>;
}