import React from 'react';
export function DividerBand({subtitle='SECTION',title='区块标题',width=800,style}){
  return <div className="ef-scope" style={{width,...style}}>
    <div className="__02-Operator_sectionDivider __02-Operator_active">
      <div className="__02-Operator_dividerSubtitle">{subtitle}</div>
      <div className="__02-Operator_dividerTitle">{title}</div>
    </div>
  </div>;
}