import React from 'react';
export function Toast({children,visible=true,style}){
  return <div className="ef-scope" style={style}><div className={'Toast_toast'+(visible?' Toast_visible':'')}>
    <div className="Toast_content">{children}</div>
  </div></div>;
}