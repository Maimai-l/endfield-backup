# Arknights: Endfield — Design System

**Generalized** design system in the industrial sci-fi style of the Arknights: Endfield official website (endfield.hypergryph.com, official-v4 build): near-monochrome ink-on-white surfaces struck through with a single signal yellow, hazard stripes, engineering deco marks, and a dark "scene" mode. **Deliberately brand-free**: no game logos, wordmarks, character art, social-network logos, or game copy — this is a reusable visual language, not an Arknights site kit.

## Source
- `uploads/endfield-controls-pack/` — extraction pack from the official site: 30 controls (original CSS, de-hashed class names, 1rem = 8px), 9 webfonts, textures/decorations. Original CSS source: `https://web.hycdn.cn/endfield/official-v4/_next/static/css/…`.
- Brand marks, social icons, wordmark textures, character portraits, and game-specific imagery were **intentionally excluded** (per project direction). Where the source hard-codes brand text (e.g. the subpage header's "ARKNIGHTS:" pseudo-content) it is stripped via `css/overrides.css`; components take generic props instead (`PageHeader brandLine`).

## Content fundamentals
- Bilingual: zh-CN primary, English as *decorative technical layer* (Gilroy/Novecento all-caps labels: `SECTION`, `LATEST NEWS`).
- Copy is terse, declarative, system-like. Section titles pair a small English label with a large CJK title. Numbers are styled as instrument readouts (`1/6`, `01`).
- No emoji, no exclamation marks, no casual voice. UI verbs are imperative: 下载, 返回列表, 开始使用. Never invent fake personal data (phone numbers etc.) in sample content — use neutral IDs like `ID-000000`.
- Decorative micro-text (coordinates, codes, brackets `[ ]`) is used as texture, not information.

## Visual foundations
- **Color**: white/near-white surfaces (#fff → #fafafa → #f2f2f2), ink #191919, ONE accent: signal yellow #fffa00 (variants #fff500/#fdfd1f/#fff000; hover #efe701, active #e6de01). Dark scene mode #131315 with #35373c borders. Rare signal accents pink #ff1aac + green #00ffa2 appear only in the "color bar" deco.
- **Type**: SansRegular/Medium/Bold (CJK+latin UI); Gilroy Light/Medium (English display labels); Novecento Sans Wide Medium/DemiBold/Bold (numerals, giant hollow display); Space Grotesk (tech readouts, 2D/3D switch).
- **Motifs**: 45° hazard stripes (black or scene-grey), dot-matrix points texture, topographic button texture, thick left accent bars (6px black or yellow), corner brackets, deco lines with gradient masks.
- **Radii**: near-square. Buttons 2px → 6px on hover (radius animates!). Panels 2–4px. Circular buttons/capsules are fully round.
- **Shadows**: soft ambient only — `0 0 4px rgba(0,0,0,.25)` cards, `drop-shadow 0 0 2px` buttons, `0 0 5px rgba(2,2,2,.3)` round buttons. No directional shadows.
- **Hover states**: color shifts (dark #383838→#484848, yellow appears on round buttons), radius 2→6px, yellow tick morphs to arrow, close X rotates 90°, texture opacity rises. Press: darker shade (#282828, #eeea00).
- **Animation**: 0.2–0.3s eases; transform/opacity slides (translate3d), staggered reveal delays (.4/.5/.6s); no bounces.
- **Layout**: fixed 60px white sidebar nav (expands to 180px); full-bleed sections; content on a 1280px design grid (source 160rem @ 8px).
- **Imagery**: cool-toned renders, greyscale + duotone (yellow) treatments via CSS filters; circular avatar chips. Supply your own imagery — only two generic full-bleed backgrounds ship with the kit.

## Iconography
- All icons are **inline SVG, single-color `currentColor` fills**, geometric/angular (mitred, no rounds) — extracted to `assets/icons/` (nav keys, arrows, share, close, deco points, triangles). Social-network logos were removed; pass your own nodes to `ShareButton items`.
- PNG icon-textures for special buttons (`operator.png`, `arrow.png`), star rating (`star.png`).
- No icon font, no emoji, no third-party set. **Do not substitute Lucide/Heroicons** — reuse the extracted SVGs or leave blank.

## Index
- `styles.css` → `tokens/` (colors, typography, fonts, motifs) + `css/controls.css` (all 30 source controls, px units) + `css/overrides.css` (`.ef-scope` neutralizer for composing scoped controls).
- `assets/` — fonts (9 woff2), icons (23 svg), textures (~35).
- `components/` — React wrappers over the source CSS. Components:
  - buttons: Button, HomeButton, ListButton, BackButton, PlayButton, CloseButton, RoundButton, Pagination, Cta
  - navigation: NavSidebar, Tabs, Selector, DropdownTrigger, ShareButton, UtilityCapsule, DownloadTile
  - display: SectionTitle, TitleBlock, LabelTag, TagDate, NoticeCard, ItemIcon, ColorDeco, HollowText, DividerBand, PageHeader, AvatarChip
  - feedback: Toast, ModalFrame
- `guidelines/` — foundation specimen cards.
- `ui_kits/website/` — generic marketing-site sample (home hero, archive, news sections; placeholder content only).
- `SKILL.md` — agent skill entrypoint.

## Known gaps (v1, from provided material only)
See "Gaps" in SKILL.md: the pack covers marketing-site controls only — no form controls (input, checkbox, radio, switch), no table/list rows, no tooltip/menu panels, no loading states, no mobile (H5) variants.
# endfield-backup
