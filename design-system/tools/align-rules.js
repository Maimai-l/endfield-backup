/* 声明式对齐规则。edge 取 left、right、top、bottom、cx、cy；min 表示两条边至少相距的像素；
   inset 为 [外层, 内层]，要求圆中套圆时上、下、侧三向内距相等。 */
const OPEN="document.querySelectorAll('.sn').forEach(n=>n.classList.add('is-open'))";
const SHUT="document.querySelectorAll('.sn').forEach(n=>n.classList.remove('is-open'))";
module.exports=[
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'收起时工具区与导航图标中线重合',a:'.app .sn-cap',b:'.app .sn-item .sn-ic',edge:'cx'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'收起时工具区与当前项指示块宽度不同',a:'.app .sn-cap',b:'.app .sn-ind',edgeA:'right',edgeB:'right',min:4},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'展开时工具区左边与悬停底色左边重合',setup:OPEN,teardown:SHUT,a:'.app .sn-cap',b:'.app .sn-item',edgeA:'left',edgeB:'left',min:12},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(2) .app',name:'展开时工具区右边与当前项指示块右边重合',setup:OPEN,teardown:SHUT,a:'.app .sn-cap',b:'.app .sn-ind',edge:'right'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(3) .app',name:'展开时组名左缘与悬停底色左缘重合',setup:OPEN,teardown:SHUT,a:'.sn-group span',b:'.sn-cap',edge:'left'},
  {comp:'Sidebar',scope:'.sn-combo:nth-child(3) .app',name:'展开时组名比导航项文字向左突出',setup:OPEN,teardown:SHUT,a:'.sn-group span',b:'.sn-item .sn-tx',edge:'left',min:24},
  {comp:'Tabs',name:'线型标签文字左缘与标签栏左缘重合',a:'.tabs .tab',b:'.tabs',edge:'left'},
  {comp:'List',name:'入口菜单文字居中',a:'.smi:not([aria-current]) .smi-tx',b:'.smi:not([aria-current])',edge:'cx'},
  {comp:'QuotaPill',name:'加号圆在额度胶囊内四周内距相等',inset:['.rpill','.rplus']},
  {comp:'Button',name:'箭头圆在胶囊按钮内四周内距相等',inset:['.cap-btn','.go']},
  {comp:'List',name:'图标圆在入口菜单条目内四周内距相等',inset:['.smi','.smi-ic']},
  {comp:'List',name:'图标圆在双行列表条目内四周内距相等',inset:['.li--2','.lead']},
];
