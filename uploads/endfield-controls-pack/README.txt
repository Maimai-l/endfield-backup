endfield-controls-pack
  index.html            全部控件预览（1rem=8px；加载 controls/site.css + states.css）
  controls/<name>.html  单个控件的 DOM（原站类名，去 hash；文字为占位）
  controls/<name>.css   该控件在原站 CSS 中的全部规则（含 :hover/:active，去 hash，单位 rem，原站 1rem = vw/160）
  controls/controls.css 上述规则合并
  controls/site.css     原站完整 CSS（去 hash，字体/纹理路径改为 assets/）
  controls/states.css   :hover→.is-hover  :active→.is-active 复制规则，用于静态定格
  assets/fonts/         9 个 woff2（SansRegular/Medium/Bold, Gilroy-Light/Medium, Novecentosanswide-Medium/DemiBold/Bold, SpaceGrotesk）
  assets/icons/         39 个 SVG（导航、箭头、关闭、装饰件；无品牌文字）
  assets/brand/         5 个品牌标识（logo、wordmark 等）——不是控件
  assets/social/        8 个社交图标
  assets/textures/      纹理与装饰图（button-texture, pag-button-texture, block-bg, points-bg, deco, arrow, switcher, color-bar 等）
控件清单（30）：nav-item utility-capsule share-button cta section-title button home-button pagination-button round-button selector play-button tag-date list-button label-bar avatar-switch card title-block media-card item-icon color-deco close-button modal-frame toast tabs back-button page-header dropdown-trigger download-tile hollow-text divider-band
