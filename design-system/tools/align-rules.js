/* 声明式对齐规则。edge 取 left、right、top、bottom、cx、cy；min 表示两条边至少相距的像素；
   inset 为 [外层, 内层]，要求圆中套圆时上、下、侧三向内距相等；
   ink 为 [容器, 元素列表, 是否浅色笔画]，按截图中的实际笔画测量各元素的垂直中心，相差不得超过 0.75px。 */
const OPEN="document.querySelectorAll('.sn').forEach(n=>n.classList.add('is-open'))";
const SHUT="document.querySelectorAll('.sn').forEach(n=>n.classList.remove('is-open'))";
module.exports=[
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'收起时工具区与导航图标中线重合',a:'.app .sn-cap',b:'.app .sn-item .sn-ic',edge:'cx'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'收起时工具区与当前项指示块宽度不同',a:'.app .sn-cap',b:'.app .sn-ind',edgeA:'right',edgeB:'right',min:4},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'展开时工具区左边与悬停底色左边重合',setup:OPEN,teardown:SHUT,a:'.app .sn-cap',b:'.app .sn-item',edgeA:'left',edgeB:'left',min:12},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'展开时工具区右边与当前项指示块右边重合',setup:OPEN,teardown:SHUT,a:'.app .sn-cap',b:'.app .sn-ind',edge:'right'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(3) .app',name:'展开时组名左缘与导航图标左缘重合',setup:OPEN,teardown:SHUT,a:'.sn-group span',b:'.sn-item .sn-ic',edge:'left'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(3) .app',name:'展开时组名与导航项文字分列',setup:OPEN,teardown:SHUT,a:'.sn-group span',b:'.sn-item .sn-tx',edge:'left',min:24},
  {comp:'Tabs',name:'线型标签文字左缘与标签栏左缘重合',a:'.tabs .tab',b:'.tabs',edge:'left'},
  {comp:'List',name:'入口菜单文字居中',a:'.smi:not([aria-current]) .smi-tx',b:'.smi:not([aria-current])',edge:'cx'},
  {comp:'Table',name:'名称表头文字左缘与名称单元格左缘重合',a:'.tbl thead th:nth-child(2) .in > span',b:'.tbl tbody tr:nth-child(2) td:nth-child(2)',edge:'left'},
  {comp:'Table',name:'部门表头文字左缘与部门单元格左缘重合',a:'.tbl thead th:nth-child(3) .in > span',b:'.tbl tbody tr:nth-child(2) td:nth-child(3)',edge:'left'},
  {comp:'Table',name:'四角标记在表格之外',a:'.tbl-frame > i:nth-child(1)',b:'.tbl',edgeA:'left',edgeB:'left',min:8},
  {comp:'QuotaPill',name:'加号圆在额度胶囊内四周内距相等',inset:['.rpill','.rplus']},
  {comp:'Button',name:'箭头圆在胶囊按钮内四周内距相等',inset:['.cap-btn','.go']},
  {comp:'List',name:'图标圆在入口菜单条目内四周内距相等',inset:['.smi','.smi-ic']},
  {comp:'List',name:'图标圆在双行列表条目内四周内距相等',inset:['.li--2','.lead']},
  {comp:'MetricBadge',name:'名称、数值、说明按钮笔画中心在同一中线',ink:['.ipill',['.l','.v','.ibtn-i']]},
  {comp:'QuotaPill',name:'数值与加号按钮笔画中心在同一中线',ink:['.rpill',['.v','.rplus']]},
  {comp:'Pagination',name:'页码数字与翻页箭头笔画中心在同一中线',ink:['.pager',['.pg:nth-of-type(2)','.pg[data-prev]','.total b']]},
  {comp:'Tag',name:'日期标签的类型与日期笔画中心在同一中线',ink:['.tagdate',['.t','.d'],true]},
];
