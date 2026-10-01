# SectionHeader

区块标题：镂空条纹大字、黄色分区带与线稿插图，用于长页面的一级分区。

## 使用方提供

`hollow`（镂空大字）、`eyebrow`（两行英文）、`title`、`art`（线稿插图 `{ src, width, height }`）。

## 结构

```jsx
const { SectionHeader } = window.Endfield;

<SectionHeader hollow="SPACING" eyebrow={['Section 04', 'Spacing and layout']} title="间距与布局" art={{ src, width: 150, height: 144 }} />
```
