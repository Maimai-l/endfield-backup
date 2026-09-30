import React from 'react';
const CH={"vb":"0 0 21 22","body":"<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M20.956,10.957 C20.956,15.921 17.454,20.065 12.785,21.064 L12.785,18.098 C15.849,17.167 18.080,14.323 18.080,10.956 C18.080,8.420 16.813,6.183 14.879,4.834 L12.785,6.951 L12.785,3.814 L12.785,0.849 L12.785,0.741 L18.932,0.738 L16.919,2.773 C19.372,4.663 20.956,7.622 20.956,10.957 ZM4.307,19.146 C1.850,17.256 0.263,14.295 0.263,10.957 C0.263,5.992 3.765,1.849 8.434,0.850 L8.434,3.814 C5.370,4.745 3.139,7.590 3.139,10.956 C3.139,13.501 4.416,15.744 6.362,17.091 L8.437,15.017 L8.437,21.231 L2.220,21.231 L4.307,19.146 Z\"></path>"};
function EfSvg({i,className,style}){return i?React.createElement('svg',{className,style,viewBox:i.vb,xmlns:'http://www.w3.org/2000/svg',dangerouslySetInnerHTML:{__html:i.body}}):null}
export function DropdownTrigger({value,label='切换账号',onClick,style}){
  return <div className="ReserveModal_reserveModal ef-scope" style={style}><div className="ReserveModal_modalContainer"><div className="ReserveModal_contentContainer">
    <div className="ReserveModal_currentAccount">
      {value!=null&&<div className="ReserveModal_number">{value}</div>}
      <div className="ReserveModal_switch" onClick={onClick}>
        <span className="ReserveModal_text">{label}</span>
        <span className="ReserveModal_switchButton"><span className="ReserveModal_switchIcon"><EfSvg i={CH}/></span></span>
      </div>
    </div>
  </div></div></div>;
}