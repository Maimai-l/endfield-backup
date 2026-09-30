import React from 'react';
export function AvatarChip({image,active=false,onClick,style,children}){
  const bg=image?{backgroundImage:'url('+image+')'}:{backgroundColor:'#c9c9c9'};
  return <div className="__02-Operator_operatorSwitcher ef-scope" style={style}><div className="__02-Operator_itemContainer">
    <div className={'__02-Operator_switchItem'+(active?' __02-Operator_active':'')} onClick={onClick}>
      <div className="__02-Operator_border"></div>
      <div className="__02-Operator_image" style={bg}>{children}</div>
    </div>
  </div></div>;
}