import React from 'react';
const X={"vb":"0 0 57 57","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M28.137,20.301 L48.026,0.414 L55.651,8.038 L35.762,27.925 L28.137,20.301 ZM56.625,48.787 L49.000,56.411 L28.137,35.550 L35.762,27.925 L56.625,48.787 ZM8.428,55.256 L0.803,47.632 L20.511,27.925 L28.137,35.550 L8.428,55.256 ZM1.777,9.193 L9.402,1.568 L28.137,20.301 L20.511,27.925 L1.777,9.193 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function CloseButton({onClick,style}){
  return <div className="Media_mediaModal ef-scope" style={style}><div className="Media_modalContainer"><div className="Media_closeBtn" onClick={onClick}>
    <span className="Media_closeIcon"><EfSvg i={X}/></span>
  </div></div></div>;
}