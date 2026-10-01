"""由 HTML 版组件文档生成 React 版文档：保留何时使用、规则、规格与来源，
把“使用方提供”改为属性说明，把“结构”改为 JSX 示例。"""
import os, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
HTML = ROOT.parent / 'design-system/project/components'
OUT = ROOT / 'project/components'

USES = {
'Button': '`variant`（primary、accent、secondary、ghost、danger，默认 secondary）、`size`（sm、md、lg）、文字 `children`（动词开头，2 至 6 个字）；可选前置图标 `icon`、后置图标 `iconEnd`、提交中 `loading`、`disabled` 与原生按钮属性。胶囊按钮用 `CapsuleButton`，进行中传 `busy`。',
'IconButton': '`icon`、`label`（无障碍名称，必填）、`variant`、`size`；`tooltip` 显示悬浮说明（`"below"` 显示在下方）；切换型按钮传 `pressed` 或 `defaultPressed` 与 `onPressedChange`；`badge` 显示提醒角标。关闭与返回用 `CloseButton`（`kind`、`inverse`），轮播翻页用 `RoundButton`（`direction`、`size`）。',
'Link': '`href` 与文字；独立链接传 `standalone`（后跟箭头）；不可用时传 `disabled`。',
'Checkbox': '文字 `children`；`checked` 或 `defaultChecked` 与 `onChange`；`indeterminate` 部分选中；`error`、`disabled`、`size`（md、lg）。成组时放在 `OptionGroup`（`legend`）内。',
'Radio': '文字 `children`、同组相同的 `name`；`checked` 或 `defaultChecked`；`error`、`disabled`、`size`。成组时放在 `OptionGroup` 内。',
'Switch': '文字 `children`（说明开关作用）；`checked` 或 `defaultChecked` 与 `onChange`；`size`（md、lg）、`loading`、`disabled`。竖向开关用 `VerticalSwitch`：`options`（上、下两个选项文字）、`label`、`checked` 或 `defaultChecked` 与 `onChange`、`size`。',
'TextField': '`label`、`required`、`help`；`error`（`true` 只换描边，文字时同时显示原因）；`icon` 前置图标、`clearable`、`unit` 单位、`filled`、`size`；`value` 或 `defaultValue` 与 `onChange`、`placeholder`、`disabled`、`readOnly` 等原生属性。没有 `label` 与 `help` 时只输出输入框本身，外层宽度用 `style`。',
'TextArea': '`label`、`help`、`error`；`maxLength` 时右下角显示计数；`value` 或 `defaultValue` 与 `onChange`、`placeholder`；外层宽度用 `style`。',
'Select': '`options`（`{ value, label, meta?, disabled? }`，分组为 `{ group, options }`）；`value` 或 `defaultValue` 与 `onChange`；`label`、`help`、`error`、`placeholder`、`disabled`、`size`；`searchable` 菜单内搜索；`loading` 传加载中的文字。常驻展开的选择面板传 `inline` 与 `defaultOpen`。多选用 `MultiSelect`：`options`、`value` 或 `defaultValue`（数组）与 `onChange`、`maxTags`。',
'Tabs': '`variant`（main 主标签、line 线型、block 区块）、`items`（`{ value, label, icon?, count?, badge?, disabled? }`）、`value` 或 `defaultValue` 与 `onChange`、`ariaLabel`。分段控件用 `SegmentedControl`：`options`（`{ value, label?, icon?, ariaLabel? }`）、`value` 或 `defaultValue` 与 `onChange`、`ariaLabel`。',
'Breadcrumb': '`items`（`{ label, href? }`，最后一项为当前页）；`maxItems` 超过时折叠中间层级（默认 4）。页面左上角的当前位置用 `Path`（`items`）。',
'Pagination': '`total` 总条数、`pageSize`、`page` 或 `defaultPage` 与 `onChange`；`variant`（full、simple）；`extras` 控制“每页条数”与“跳至”。轮播翻页用 `PageCapsule`（`total` 总页数、`page` 或 `defaultPage`）。',
'TopBar': '`title`；可选 `crumbs`（面包屑）、`search`（搜索框占位文字）与 `onSearch`、`actions`（0 至 3 个按钮）、`account`（账户入口）。缺省的槽位直接省略。',
'Sidebar': '`name` 产品名、`items`（`{ value, label, icon, href?, badge? }`，分组标题为 `{ group }`）、`value` 或 `defaultValue` 与 `onChange`、`tools`（底部工具区，`{ label, icon, onClick? }`，1 至 3 个）。悬停或聚焦时展开，单击左上角标记固定展开。',
'Avatar': '文字头像传一个字作为 `children`；图片传 `src` 与 `alt`；都没有时显示 `icon`（默认 i-user）；`size` 直径、`status`（online、off）；可点击时传 `onClick` 与 `label`。堆叠用 `AvatarStack`（`more` 为其余人数）。',
'Card': '`eyebrow`（英文分类）、`title`、正文 `children`、`footer`；链接卡片传 `href`；可选卡片传 `selectable` 与 `selected` 或 `defaultSelected`、`onSelectedChange`；`disabled`。读数卡片用 `StatCard`（`label`、`value`、`unit`、`delta`），源站条目卡片用 `EntryCard`（`title`、`meta`、正文、`action`、`off`）。',
'Divider': '`variant`（line、label、section、vertical）；label 与 section 传文字 `children`。',
'EmptyState': '`icon`、`title`、说明 `children`（原因与下一步）、唯一的操作 `action`。',
'List': '`variant`（two-line、single、compact）、`items`（`{ value, title, subtitle?, icon?, trailing?, disabled? }`）；可选列表传 `selectable` 与 `value` 或 `defaultValue`、`onChange`、`ariaLabel`。入口菜单用 `EntryMenu`（`items`：`{ value, label, icon, href? }`）。',
'MetricBadge': '`label`、`value`（1 至 3 个字符）、`infoLabel`（说明按钮的无障碍名称）与 `onInfo`。',
'QuotaPill': '`icon`、`value` 用量、`max` 上限、`unit`、`actionLabel`（加号按钮的无障碍名称）与 `onAction`。用量达到上限时自动显示为已满。',
'Table': '`columns`（`{ key, label, kind?, unit?, width?, sortable?, error?, render?, sortValue? }`，kind 为 id、name、status、time、text、number）、`rows`、`rowKey`（默认 id）；行可选时传 `selectable` 与 `selected` 或 `defaultSelected`、`onSelectedChange`；排序 `sort` 或 `defaultSort`（`{ key, dir }`）与 `onSortChange`；`isDisabled` 返回禁用行；`minWidth`（默认 880）。',
'Tag': '文字 `children`；`variant`（neutral、accent）、`status`（ok、warn、err、info、off、plain）、`size`（sm、md）；可移除时传 `onRemove`。表格与列表中的状态点用 `Status`（`tone`），公告的类型加日期用 `TagDate`。',
'Banner': '`type`（info、success、warning、error）、`title`、说明 `children`（可含链接）；可关闭时传 `onClose`。',
'Dialog': '`open` 与 `onClose`、`title`、正文 `children`；危险确认传 `danger`，需要输入确认文字时传 `confirmText`；`confirmLabel`、`cancelLabel`、`onConfirm`；自定义底部用 `footer`。嵌在页面中作规格展示时传 `inline`。',
'Loading': '`size`（16、20、32）；旁边需要文字时传 `label`。骨架占位用 `Skeleton`（`width`、`height`、`round`）。',
'PageLoader': '`orientation`（vertical、horizontal）、`label`、`appTitle`；由外部控制进度时传 `progress`（0 至 100），省略时自动演示一次；`replayKey` 改变时重新演示；`onDone`。',
'Progress': '`label`、`value`（0 至 100，省略为不确定进度）、`valueText`、`thin`、`status`（done、error、paused）、`note`。',
'Toast': '在页面根部放一次 `ToastProvider`，在组件内用 `useToast()` 取得 `show(type, 文案, 操作?, 操作回调?)`。单条静态提示用 `Toast`（`type`、文字、`action` 与 `onAction`、`onClose`）。',
'Tooltip': '触发元素作为唯一的子元素（需可聚焦）；`content`；`shortcut` 快捷键；双行说明传 `title`；`placement`（top、below、start）、`multiline`；规格展示中常显传 `open`。',
'Surface': '`tone`（brand 黄色整面、ink 墨色整面）、`contour` 等高线纹理与 `numeral` 巨型数字（只用于黄色整面）；内容作为 `children`，由使用方定位。磨砂玻璃用 `Glass`（`as` 可为 nav），只放在墨色整面上。',
'ColorLine': '`orientation`（horizontal、vertical）。',
'SectionHeader': '`hollow`（镂空大字）、`eyebrow`（两行英文）、`title`、`art`（线稿插图 `{ src, width, height }`）。',
}

STRUCT = {
'Button': '<Button variant="primary">保存设置</Button>\n<Button icon="i-plus">新建任务</Button>\n<CapsuleButton>前往</CapsuleButton>',
'IconButton': '<IconButton icon="i-upload" label="上传" variant="primary" tooltip />\n<IconButton icon="i-grid" label="网格视图" defaultPressed />\n<CloseButton onClick={close} />',
'Link': '<Link href="/records">进度记录</Link>\n<Link href="/projects" standalone>查看全部项目</Link>',
'Checkbox': '<OptionGroup legend="通知渠道">\n  <Checkbox defaultChecked>站内消息</Checkbox>\n  <Checkbox>短信</Checkbox>\n</OptionGroup>',
'Radio': '<OptionGroup legend="评审频率">\n  <Radio name="freq" defaultChecked>每日一次</Radio>\n  <Radio name="freq">每周一次</Radio>\n</OptionGroup>',
'Switch': '<Switch defaultChecked onChange={(e) => save(e.target.checked)}>消息通知</Switch>\n<VerticalSwitch options={[\'二维\', \'三维\']} label="三维视图" onChange={setThreeD} />',
'TextField': '<TextField label="名称" required placeholder="例如：季度报告" help="同一目录内不可重名" />\n<TextField label="搜索" icon="i-search" clearable />\n<TextField label="编号" error="应为 ID- 加 6 位数字" />',
'TextArea': '<TextArea label="描述" maxLength={200} placeholder="补充背景与目标" style={{ width: 340 }} />',
'Select': '<Select label="所属部门" defaultValue="p" options={[\n  { group: \'Product\', options: [{ value: \'p\', label: \'产品部\' }, { value: \'o\', label: \'运营部\' }] },\n]} onChange={setDept} />',
'Tabs': '<Tabs variant="line" defaultValue="o" items={[{ value: \'o\', label: \'概览\' }, { value: \'a\', label: \'动态\', count: 128 }]} />\n<SegmentedControl ariaLabel="时间范围" options={[{ value: \'7d\', label: \'7 天\' }, { value: \'30d\', label: \'30 天\' }]} />',
'Breadcrumb': '<Breadcrumb items={[{ label: \'项目管理\', href: \'/\' }, { label: \'产品部\', href: \'/p\' }, { label: \'官网改版\' }]} />',
'Pagination': '<Pagination total={248} page={page} onChange={setPage} />',
'TopBar': '<TopBar title="产品部" crumbs={[{ label: \'项目\', href: \'/\' }, { label: \'产品部\' }]} search="搜索项目编号"\n  actions={<Button variant="primary" icon="i-plus">新建项目</Button>} />',
'Sidebar': '<Sidebar name="Ops Console" value={page} onChange={setPage}\n  items={[{ value: \'home\', label: \'总览\', icon: \'n-home\' }, { group: \'管理\' }, { value: \'arc\', label: \'归档\', icon: \'n-lore\' }]}\n  tools={[{ label: \'设置\', icon: \'i-sliders\', onClick: openSettings }]} />',
'Avatar': '<Avatar>周</Avatar>\n<Avatar src={url} alt="成员 302" status="online" />\n<AvatarStack more={4}><Avatar size={32}>周</Avatar><Avatar size={32}>林</Avatar></AvatarStack>',
'Card': '<Card eyebrow="Interactive" title="官网改版" href="/p/142" footer={<code>PRJ-0142</code>}>产品部</Card>\n<EntryCard title="官网改版评审" meta="12 / 18" action={<CapsuleButton>前往</CapsuleButton>}>剩余 6 项待评审。</EntryCard>',
'Divider': '<Divider />\n<Divider variant="label">以下为已归档记录</Divider>',
'EmptyState': '<EmptyState icon="i-box" title="还没有项目" action={<Button variant="primary" size="sm" icon="i-plus">新建项目</Button>}>\n  新建第一个项目后，这里会显示它的进度与成员。\n</EmptyState>',
'List': '<List variant="two-line" selectable ariaLabel="文件" items={[\n  { value: \'a\', icon: \'i-doc\', title: \'季度报告\', subtitle: \'9 月 30 日更新\', trailing: \'2.4 MB\' },\n]} />',
'MetricBadge': '<MetricBadge label="评审等级" value="02" infoLabel="评审等级说明" onInfo={explain} />',
'QuotaPill': '<QuotaPill icon="i-box" value={820} max={1000} unit="GB" actionLabel="扩容存储" onAction={expand} />',
'Table': '<Table rows={rows} selectable defaultSort={{ key: \'prog\', dir: \'descending\' }} isDisabled={(r) => r.archived}\n  columns={[\n    { key: \'id\', label: \'项目编号\', kind: \'id\', width: 128 },\n    { key: \'name\', label: \'名称\', kind: \'name\' },\n    { key: \'prog\', label: \'进度\', kind: \'number\', unit: \'%\', width: 112 },\n  ]} />',
'Tag': '<Tag status="warn">待处理</Tag>\n<Tag onRemove={remove}>表格</Tag>\n<Status tone="ok">进行中</Status>',
'Banner': '<Banner type="warning" title="存储用量已超过 85%">建议清理过期文件。<Link href="/usage">查看用量</Link></Banner>',
'Dialog': '<Dialog open={open} onClose={() => setOpen(false)} danger title="删除项目" confirmText="PRJ-0142" onConfirm={remove}>\n  <p>删除后该项目的记录将一并清除，且无法恢复。</p>\n</Dialog>',
'Loading': '<Loading size={16} label="正在读取 18 个文件" />\n<Skeleton width="60%" height={12} />',
'PageLoader': '<PageLoader label="正在载入工作区" progress={progress} onDone={show} />',
'Progress': '<Progress label="版本上传" value={64} />\n<Progress label="同步 B-11" value={72} status="error" note="项目无响应，已中止" />',
'Toast': 'function Save() {\n  const show = useToast();\n  return <Button onClick={() => show(\'success\', \'任务已关闭\', \'撤销\', undo)}>关闭任务</Button>;\n}\n<ToastProvider><Save /></ToastProvider>',
'Tooltip': '<Tooltip content="搜索项目" shortcut="Ctrl K">\n  <IconButton icon="i-search" label="搜索" />\n</Tooltip>',
'Surface': '<Surface tone="ink">\n  <div>…列表…</div>\n  <Glass as="nav">…标题与导航项…</Glass>\n</Surface>',
'ColorLine': '<ColorLine />\n<ColorLine orientation="vertical" />',
'SectionHeader': '<SectionHeader hollow="SPACING" eyebrow={[\'Section 04\', \'Spacing and layout\']} title="间距与布局" art={{ src, width: 150, height: 144 }} />',
}

FIX = {
    '每屏至多一个强调按钮 `btn--accent`；主要操作用 `btn--primary`。': '每屏至多一个强调按钮 `variant="accent"`；主要操作用 `variant="primary"`。',
    '图标一律用 `bundle.js` 提供的 SVG。': '图标一律用 `Icon` 组件或组件的 `icon` 属性。',
    '不可选的项加 `is-disabled` 与 `aria-disabled` 并说明原因。': '不可选的项设 `disabled: true`，并用 `meta` 说明原因。',
    '字数上限写在 `data-max` 与 `maxlength`。': '字数上限写在 `maxLength`。',
    '- **脚本**：`Endfield.init` 绑定排序、选中与键盘操作；选中变化时表格派发 `tbl-select` 事件；`table.Endfield.selected()` 返回已选行，动态插入的行先调用 `table.Endfield.prep(tr)`': '- **事件**：选中变化时调用 `onSelectedChange(keys)`，排序变化时调用 `onSortChange(sort)`',
}

def sections(text):
    parts = re.split(r'(?m)^(## .+)$', text)
    head, out = parts[0], []
    for i in range(1, len(parts), 2):
        out.append([parts[i].strip(), parts[i + 1]])
    return head, out

for comp in sorted(os.listdir(HTML)):
    src = HTML / comp / 'README.md'
    if not src.exists():
        continue
    text = src.read_text()
    head, secs = sections(text)
    if comp in USES:
        names = [s[0] for s in secs]
        if '## 使用方提供' in names:
            secs[names.index('## 使用方提供')][1] = '\n\n' + USES[comp] + '\n\n'
        else:
            secs.insert(0, ['## 使用方提供', '\n\n' + USES[comp] + '\n\n'])
        names = [s[0] for s in secs]
        block = '\n\n```jsx\nconst { ' + ', '.join(sorted(set(re.findall(r'<([A-Z][A-Za-z]+)', STRUCT[comp])) - {'Button', 'Link', 'IconButton', 'CapsuleButton'} | set(re.findall(r'<([A-Z][A-Za-z]+)', STRUCT[comp])))) + ' } = window.Endfield;\n\n' + STRUCT[comp] + '\n```\n\n'
        if '## 结构' in names:
            secs[names.index('## 结构')][1] = block
        else:
            secs.append(['## 结构', block])
    body = head.rstrip() + '\n\n' + ''.join(t + b if b.startswith('\n') else t + '\n' + b for t, b in secs)
    for a, b in FIX.items():
        body = body.replace(a, b)
    body = re.sub(r'\n{3,}', '\n\n', body).rstrip() + '\n'
    (OUT / comp).mkdir(parents=True, exist_ok=True)
    (OUT / comp / 'README.md').write_text(body)
print('ok')
