import React from 'react';
export function LabelTag({label,value,yellow=false,style}){
  return <div className="__02-Operator_sectionContainer ef-scope" style={style}><div className="__02-Operator_pcContainer"><div className="__02-Operator_contentContainer">
    <div className="__02-Operator_tagContainer"><div className="__02-Operator_tag">
      <div className={'__02-Operator_label'+(yellow?' __02-Operator_cv __02-Operator_showText':'')}>{label}</div>
      {value!=null&&<div className="__02-Operator_value">{value}</div>}
    </div></div>
  </div></div></div>;
}