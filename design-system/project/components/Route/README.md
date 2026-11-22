# Route

线路：有先后关系的几段排成一行，段与段之间的线表示是否接通。

## 何时使用

请求依次经过的几个环节，需要一眼看出通到哪一段、断在哪一段：域名、服务、应用；客户端、网关、插件。每个环节都要展示多项读数和一个主动作时用 StatusCard 的链路。没有先后关系的对象不用。

## 使用方提供

`.route` 内每一段为 `.route-st`。段内可用：名称 `.name`、小标 `.m`（端口、域名、下游名称）、状态与动作一行 `.ln`（状态词 `.v` 加按钮）、检测结果 `.res`。到下一段的线断开时在本段写 `data-next="off"`，本段是最后一段时写 `data-next="none"`；本段不可达时加 `is-down`。上游有总开关时在 `.route` 上设 `--route-lead` 画出引线，总开关关闭时加 `is-cut`。

## 规则

- 实线为接通，虚线为断开；线只表示这一件事，不作装饰或分隔。
- 断点只标一处：第一段不通的那一段状态词用 `is-err`，它之后的段加 `is-down`，状态词用 `is-off`。
- 第一段写线路名称与检测结果；检测结果写“正常”或“不通”，不通时写明断在哪一段。
- 动作贴着它控制的那一段，状态词在前，下一步动作在后；能修复断点的动作用实底胶囊，其余用灰色胶囊。已连接等不需要操作的状态不放按钮。
- 多条线路上下排列时用同一组列宽，使同一段上下对齐；段数少的线路在最后一段结束，不补空段。
- 线路之间不加分隔线，不加外框。

## 规格

- **尺寸**：每段最小高 112；线高 2，距段顶 15；节点 8，方形，实心为可达、空心为不可达；文字距段顶 32；名称 20px Medium；小标 11px Gilroy，大写；状态词 16px Medium，与按钮相隔 12；检测结果 13px
- **Token**：`--color-checked --color-border-control --color-text-primary --color-text-secondary --color-text-tertiary --color-text-disabled --color-error --font-medium --font-en`

## 结构

```html
<div class="route" style="grid-template-columns:232px 196px 196px">
  <div class="route-st" data-next="off">
    <span class="name">Unity</span>
    <span class="m">umcp.maimaiqiu.work</span>
    <span class="res"><b class="is-err">不通</b>断在服务</span>
  </div>
  <div class="route-st is-down" data-next="off">
    <span class="m">:8082</span>
    <div class="ln">
      <span class="v is-err">已停止</span>
      <button class="pill pill--sm" type="button">
        <span class="lbl">启动</span>
      </button>
    </div>
  </div>
  <div class="route-st is-down" data-next="none">
    <span class="m">Unity 编辑器 :6400</span>
    <div class="ln"><span class="v is-off">未连接</span></div>
  </div>
</div>
```

## 来源

新增。接通与断开的画法同 StatusCard 的链路。
