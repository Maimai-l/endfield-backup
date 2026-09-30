import React from 'react';
export function HollowText({children='HEADLINE',size=125,style}){
  return <div className="HallowText_hollowText" style={{fontSize:size,height:size,letterSpacing:-size*.04,...style}}>{children}</div>;
}