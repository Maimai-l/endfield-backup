/* @ds-bundle: {"format":4,"namespace":"DesignSystem_e77ad3","components":[{"name":"BackButton","sourcePath":"components/buttons/BackButton.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CloseButton","sourcePath":"components/buttons/CloseButton.jsx"},{"name":"Cta","sourcePath":"components/buttons/Cta.jsx"},{"name":"HomeButton","sourcePath":"components/buttons/HomeButton.jsx"},{"name":"ListButton","sourcePath":"components/buttons/ListButton.jsx"},{"name":"Pagination","sourcePath":"components/buttons/Pagination.jsx"},{"name":"PlayButton","sourcePath":"components/buttons/PlayButton.jsx"},{"name":"RoundButton","sourcePath":"components/buttons/RoundButton.jsx"},{"name":"AvatarChip","sourcePath":"components/display/AvatarChip.jsx"},{"name":"ColorDeco","sourcePath":"components/display/ColorDeco.jsx"},{"name":"DividerBand","sourcePath":"components/display/DividerBand.jsx"},{"name":"HollowText","sourcePath":"components/display/HollowText.jsx"},{"name":"ItemIcon","sourcePath":"components/display/ItemIcon.jsx"},{"name":"LabelTag","sourcePath":"components/display/LabelTag.jsx"},{"name":"NoticeCard","sourcePath":"components/display/NoticeCard.jsx"},{"name":"PageHeader","sourcePath":"components/display/PageHeader.jsx"},{"name":"SectionTitle","sourcePath":"components/display/SectionTitle.jsx"},{"name":"TagDate","sourcePath":"components/display/TagDate.jsx"},{"name":"TitleBlock","sourcePath":"components/display/TitleBlock.jsx"},{"name":"ModalFrame","sourcePath":"components/feedback/ModalFrame.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"DownloadTile","sourcePath":"components/navigation/DownloadTile.jsx"},{"name":"DropdownTrigger","sourcePath":"components/navigation/DropdownTrigger.jsx"},{"name":"NavSidebar","sourcePath":"components/navigation/NavSidebar.jsx"},{"name":"Selector","sourcePath":"components/navigation/Selector.jsx"},{"name":"ShareButton","sourcePath":"components/navigation/ShareButton.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"UtilityCapsule","sourcePath":"components/navigation/UtilityCapsule.jsx"}],"sourceHashes":{"components/buttons/BackButton.jsx":"4ef70c7fd56f","components/buttons/Button.jsx":"2b3f7cd346b5","components/buttons/CloseButton.jsx":"ed1dc8a30029","components/buttons/Cta.jsx":"fa9d0c26c4fd","components/buttons/HomeButton.jsx":"e6a8273072fb","components/buttons/ListButton.jsx":"14377be93023","components/buttons/Pagination.jsx":"d4bc743e8cd1","components/buttons/PlayButton.jsx":"a6b8d72bbdad","components/buttons/RoundButton.jsx":"899ac3425b93","components/display/AvatarChip.jsx":"34811aa37488","components/display/ColorDeco.jsx":"08014a73a639","components/display/DividerBand.jsx":"d36a2e3d386a","components/display/HollowText.jsx":"1b93689591f3","components/display/ItemIcon.jsx":"973271237af2","components/display/LabelTag.jsx":"03d582172ba6","components/display/NoticeCard.jsx":"067d0a56b316","components/display/PageHeader.jsx":"e18536128391","components/display/SectionTitle.jsx":"5a06e33033d9","components/display/TagDate.jsx":"88f362126f66","components/display/TitleBlock.jsx":"d4471ba0e36f","components/feedback/ModalFrame.jsx":"5a500c9a1ac4","components/feedback/Toast.jsx":"58914b882ac4","components/navigation/DownloadTile.jsx":"1ff07dfc8375","components/navigation/DropdownTrigger.jsx":"b88283543701","components/navigation/NavSidebar.jsx":"b2fa436a8ef0","components/navigation/Selector.jsx":"fb45ddd0ab77","components/navigation/ShareButton.jsx":"f0a6e9c65a22","components/navigation/Tabs.jsx":"7b8159479960","components/navigation/UtilityCapsule.jsx":"1bf76ca82b08","ui_kits/website/Screens.jsx":"32a0e9f22bc3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_e77ad3 = window.DesignSystem_e77ad3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/BackButton.jsx
try { (() => {
function BackButton({
  children = '返回列表',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "BackButton_backButton",
    style: style,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { BackButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/BackButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function Button({
  children,
  variant = 'dark',
  disabled = false,
  onClick,
  style
}) {
  const cls = ['Button_button', variant === 'light' && 'Button_light', disabled && 'Button_disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "Button_text"
  }, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/CloseButton.jsx
try { (() => {
const X = {
  "vb": "0 0 57 57",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M28.137,20.301 L48.026,0.414 L55.651,8.038 L35.762,27.925 L28.137,20.301 ZM56.625,48.787 L49.000,56.411 L28.137,35.550 L35.762,27.925 L56.625,48.787 ZM8.428,55.256 L0.803,47.632 L20.511,27.925 L28.137,35.550 L8.428,55.256 ZM1.777,9.193 L9.402,1.568 L28.137,20.301 L20.511,27.925 L1.777,9.193 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function CloseButton({
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Media_mediaModal ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "Media_modalContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Media_closeBtn",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "Media_closeIcon"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: X
  })))));
}
Object.assign(__ds_scope, { CloseButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/CloseButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Cta.jsx
try { (() => {
const TRI = {
  "vb": "0 0 31 28",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M23.146,13.962 L15.554,0.843 L30.739,0.843 L23.146,13.962 ZM0.261,0.843 L15.446,0.843 L7.854,13.962 L0.261,0.843 ZM15.554,27.156 L7.961,14.036 L23.146,14.036 L15.554,27.156 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function Cta({
  label = '预约',
  horizontal = false,
  horizontalLabel,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'Header_pcHeaderContainer ef-scope' + (horizontal ? ' Header_detailActive' : ''),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header_buttonPreserveBg",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header_bg"
  }), /*#__PURE__*/React.createElement("span", {
    className: "Header_tri"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: TRI
  })), /*#__PURE__*/React.createElement("div", {
    className: "Header_divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Header_text"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "Header_divider2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Header_text2"
  }, horizontalLabel || label)));
}
Object.assign(__ds_scope, { Cta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Cta.jsx", error: String((e && e.message) || e) }); }

// components/buttons/HomeButton.jsx
try { (() => {
const POINTS = {
    "vb": "0 2.956 25.348 20.089",
    "body": "<path d=\"M20.9003 8.98713H17.9705L18.2468 7.15772C18.2615 7.05993 18.1851 6.97363 18.0851 6.97363H16.1986C16.1163 6.97363 16.0487 7.03116 16.0369 7.1117L15.7519 8.98713H10.8327L11.1089 7.15772C11.1236 7.05993 11.0472 6.97363 10.9473 6.97363H9.06361C8.98133 6.97363 8.91375 7.03116 8.90199 7.1117L8.61695 8.98713H5.64014C5.55786 8.98713 5.49027 9.04466 5.47851 9.1252L5.22285 10.8165C5.20816 10.9143 5.28456 11.0006 5.38448 11.0006H8.31133L7.96164 13.3046C7.01247 13.1263 6.03391 13.0228 5.03184 13.0141C4.94956 13.0141 4.87904 13.0745 4.86728 13.1522L4.61162 14.8435C4.59693 14.9385 4.67627 15.0247 4.77325 15.0247C6.03685 15.0334 6.88904 15.1369 7.65896 15.2951L7.11826 18.8648C7.10356 18.9626 7.17997 19.0489 7.27988 19.0489H9.16353C9.24581 19.0489 9.3134 18.9913 9.32515 18.9108L9.78651 15.8762C11.6819 16.5608 13.3892 17.6308 14.8027 18.9885C15.4022 19.5637 16.416 19.2214 16.5394 18.4103L16.6129 17.9242L16.7481 17.0354H19.7249C19.8072 17.0354 19.8748 16.9778 19.8865 16.8973L20.1422 15.206C20.1569 15.1082 20.0805 15.0219 19.9805 15.0219H17.0507L17.662 10.9978H20.6388C20.7211 10.9978 20.7887 10.9402 20.8004 10.8597L21.0561 9.16834C21.0708 9.07055 20.9944 8.98425 20.8944 8.98425L20.9003 8.98713ZM15.3904 11.3746L14.7351 15.6863C14.6969 15.9308 14.4119 16.043 14.2062 15.9021C13.0278 15.088 11.7319 14.4264 10.3507 13.9432C10.2009 13.8914 10.1098 13.7447 10.1333 13.5894L10.483 11.2796C10.5065 11.1186 10.6475 11.0006 10.815 11.0006H15.0584C15.2641 11.0006 15.4198 11.179 15.3904 11.3774V11.3746Z\" fill=\"currentColor\"></path><path d=\"M0.240966 16.5783C0.649432 18.773 1.53101 19.9466 2.70646 20.9016C3.91129 21.8335 5.38941 22.5325 8.16051 22.8547C9.4153 23.0014 10.9434 23.0445 12.6742 23.0445C14.4051 23.0445 15.9331 23.0014 17.1879 22.8547C19.9561 22.5296 21.4371 21.8307 22.642 20.9016C23.8145 19.9466 24.699 18.773 25.1075 16.5783C25.2926 15.5831 25.3484 14.3721 25.3484 13C25.3484 11.628 25.2926 10.4141 25.1075 9.42177C24.699 7.22706 23.8174 6.05348 22.642 5.0985C21.4371 4.16654 19.959 3.46757 17.1879 3.14541C15.9331 2.99871 14.4051 2.95557 12.6742 2.95557C10.9434 2.95557 9.4153 2.99871 8.16051 3.14541C5.39234 3.47045 3.91129 4.16942 2.70646 5.0985C1.53101 6.0506 0.649432 7.22418 0.240966 9.41889C0.0558335 10.4141 0 11.6251 0 12.9972C0 14.3692 0.0558335 15.5831 0.240966 16.5754V16.5783ZM2.11286 9.75256C2.43023 8.04684 3.03264 7.25582 3.90247 6.54247C4.72528 5.90965 5.84489 5.28835 8.38385 4.9892C9.42118 4.86839 10.7847 4.81086 12.6713 4.81086C14.5579 4.81086 15.9214 4.86839 16.9587 4.9892C19.4977 5.28547 20.6173 5.90965 21.4401 6.54247C22.3099 7.25582 22.9123 8.04684 23.2297 9.75256C23.3737 10.5234 23.4413 11.5532 23.4413 12.9972C23.4413 14.4411 23.3737 15.4709 23.2297 16.2418C22.9123 17.9475 22.3099 18.7385 21.4401 19.4519C20.6173 20.0847 19.4977 20.706 16.9587 21.0051C15.9214 21.1259 14.5579 21.1835 12.6713 21.1835C10.7847 21.1835 9.42118 21.1259 8.38385 21.0051C5.84489 20.7089 4.72528 20.0847 3.90247 19.4519C3.03264 18.7385 2.43023 17.9475 2.11286 16.2418C1.96887 15.4709 1.90128 14.4411 1.90128 12.9972C1.90128 11.5532 1.96887 10.5234 2.11286 9.75256Z\" fill=\"currentColor\"></path>"
  },
  ARROW = {
    "vb": "0 0 18 27",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M14.142,0.127 L17.753,3.737 L7.963,13.527 L17.753,23.318 L14.142,26.928 L0.743,13.527 L14.142,0.127 Z\"></path>"
  };
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function HomeButton({
  children,
  icon,
  white = false,
  disabled = false,
  onClick,
  style
}) {
  const cls = ['HomeButton_button', white && 'HomeButton_white', disabled && 'HomeButton_disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "HomeButton_points"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: POINTS
  })), /*#__PURE__*/React.createElement("span", {
    className: "HomeButton_icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: "HomeButton_divider"
  }), /*#__PURE__*/React.createElement("span", {
    className: "HomeButton_text"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "HomeButton_arrow"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: ARROW
  }))));
}
Object.assign(__ds_scope, { HomeButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/HomeButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ListButton.jsx
try { (() => {
function ListButton({
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_listButton",
    onClick: onClick
  }, children));
}
Object.assign(__ds_scope, { ListButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ListButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Pagination.jsx
try { (() => {
const AR = {
  "vb": "0 0 18 27",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M14.142,0.127 L17.753,3.737 L7.963,13.527 L17.753,23.318 L14.142,26.928 L0.743,13.527 L14.142,0.127 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function Btn({
  right,
  disabled,
  onClick
}) {
  const cls = ['Pagination_button', right && 'Pagination_right', disabled && 'Pagination_disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: disabled ? undefined : onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "Pagination_border"
  }), /*#__PURE__*/React.createElement("span", {
    className: 'Pagination_arrow' + (right ? ' Pagination_right' : '')
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: AR
  })));
}
function Pagination({
  dark = false,
  current,
  total,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  style
}) {
  const num = current != null && total != null;
  const cls = ['Pagination_pagination', dark && 'Pagination_dark', num && 'Pagination_number'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement(Btn, {
    disabled: prevDisabled,
    onClick: onPrev
  }), num && /*#__PURE__*/React.createElement("div", {
    className: "Pagination_paginationNumber"
  }, /*#__PURE__*/React.createElement("span", null, current), /*#__PURE__*/React.createElement("span", {
    className: "Pagination_divider"
  }, "/"), /*#__PURE__*/React.createElement("span", null, total)), /*#__PURE__*/React.createElement(Btn, {
    right: true,
    disabled: nextDisabled,
    onClick: onNext
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/buttons/PlayButton.jsx
try { (() => {
function PlayButton({
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_infoCurrent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_buttons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_playBtn",
    onClick: onClick
  }))));
}
Object.assign(__ds_scope, { PlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/PlayButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/RoundButton.jsx
try { (() => {
function RoundButton({
  direction = 'next',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_infoVideos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_navContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: '__04-Information_navBtn __04-Information_' + (direction === 'prev' ? 'prev' : 'next'),
    onClick: onClick
  }))));
}
Object.assign(__ds_scope, { RoundButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/RoundButton.jsx", error: String((e && e.message) || e) }); }

// components/display/AvatarChip.jsx
try { (() => {
function AvatarChip({
  image,
  active = false,
  onClick,
  style,
  children
}) {
  const bg = image ? {
    backgroundImage: 'url(' + image + ')'
  } : {
    backgroundColor: '#c9c9c9'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_operatorSwitcher ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_itemContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: '__02-Operator_switchItem' + (active ? ' __02-Operator_active' : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_border"
  }), /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_image",
    style: bg
  }, children))));
}
Object.assign(__ds_scope, { AvatarChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/AvatarChip.jsx", error: String((e && e.message) || e) }); }

// components/display/ColorDeco.jsx
try { (() => {
function ColorDeco({
  kind = 'block',
  style
}) {
  if (kind === 'lattice') return /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_container ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_lattice"
  }));
  if (kind === 'line') return /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_container ef-scope",
    style: {
      width: 240,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_colorLine"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_container ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_colorBlock"
  }));
}
Object.assign(__ds_scope, { ColorDeco });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ColorDeco.jsx", error: String((e && e.message) || e) }); }

// components/display/DividerBand.jsx
try { (() => {
function DividerBand({
  subtitle = 'SECTION',
  title = '区块标题',
  width = 800,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ef-scope",
    style: {
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_sectionDivider __02-Operator_active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_dividerSubtitle"
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_dividerTitle"
  }, title)));
}
Object.assign(__ds_scope, { DividerBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DividerBand.jsx", error: String((e && e.message) || e) }); }

// components/display/HollowText.jsx
try { (() => {
function HollowText({
  children = 'HEADLINE',
  size = 125,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "HallowText_hollowText",
    style: {
      fontSize: size,
      height: size,
      letterSpacing: -size * .04,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { HollowText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/HollowText.jsx", error: String((e && e.message) || e) }); }

// components/display/ItemIcon.jsx
try { (() => {
const IC = {
  "vb": "0 0 57 47",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M27.127,12.817 C21.471,12.817 16.885,17.503 16.885,23.282 C16.885,29.065 21.471,33.751 27.127,33.751 C27.557,33.751 27.981,33.721 28.397,33.668 L28.397,46.516 L14.001,46.516 L0.876,23.282 L14.001,0.052 L40.253,0.052 L50.379,17.969 L35.953,17.969 C34.170,14.886 30.886,12.817 27.127,12.817 ZM40.479,26.382 L36.055,21.862 L46.634,21.862 L46.631,30.607 L46.631,31.722 L56.119,41.418 L50.711,46.944 L41.223,37.249 L31.572,37.249 L31.572,26.443 L35.995,30.963 L40.479,26.382 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function ItemIcon({
  icon,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__05-Gameplay_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__05-Gameplay_itemIcon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "__05-Gameplay_icon"
  }, icon || /*#__PURE__*/React.createElement(EfSvg, {
    i: IC
  }))));
}
Object.assign(__ds_scope, { ItemIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ItemIcon.jsx", error: String((e && e.message) || e) }); }

// components/display/LabelTag.jsx
try { (() => {
function LabelTag({
  label,
  value,
  yellow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_pcContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_contentContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_tagContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_tag"
  }, /*#__PURE__*/React.createElement("div", {
    className: '__02-Operator_label' + (yellow ? ' __02-Operator_cv __02-Operator_showText' : '')
  }, label), value != null && /*#__PURE__*/React.createElement("div", {
    className: "__02-Operator_value"
  }, value))))));
}
Object.assign(__ds_scope, { LabelTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/LabelTag.jsx", error: String((e && e.message) || e) }); }

// components/display/NoticeCard.jsx
try { (() => {
function NoticeCard({
  image,
  active = true,
  onClick,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: '__06-Notice_noticeItem' + (active ? ' __06-Notice_active' : ''),
    style: {
      width: 440,
      height: 247.5
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_image",
    style: image ? {
      backgroundImage: 'url(' + image + ')'
    } : {
      backgroundColor: '#d9d9d9'
    }
  }), children));
}
Object.assign(__ds_scope, { NoticeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/NoticeCard.jsx", error: String((e && e.message) || e) }); }

// components/display/PageHeader.jsx
try { (() => {
const EF = null,
  COLON = null,
  DECO = null,
  HI = null;
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function PageHeader({
  title = '新闻中心',
  titleEn = 'NEWS CENTER',
  brandLine = 'DESIGN SYSTEM',
  image = 'bolt',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "SubpageHeader_subpageHeader",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "SubpageHeader_decoHeader"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 49,
      top: 10,
      fontFamily: 'Gilroy-Light',
      fontSize: 10,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, brandLine), /*#__PURE__*/React.createElement("div", {
    className: "SubpageHeader_icon"
  }, HI ? /*#__PURE__*/React.createElement(EfSvg, {
    i: HI,
    style: {
      width: 28,
      height: 28
    }
  }) : null), COLON && /*#__PURE__*/React.createElement("span", {
    className: "SubpageHeader_colonSvg"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: COLON
  })), EF && /*#__PURE__*/React.createElement("span", {
    className: "SubpageHeader_efSvg"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: EF
  })), /*#__PURE__*/React.createElement("div", {
    className: "SubpageHeader_titleEn"
  }, titleEn), DECO && /*#__PURE__*/React.createElement("span", {
    className: "SubpageHeader_decoSvg"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: DECO
  }))), /*#__PURE__*/React.createElement("div", {
    className: "SubpageHeader_title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: 'SubpageHeader_image SubpageHeader_' + image
  }));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/display/SectionTitle.jsx
try { (() => {
const AR = {
  "vb": "0 0 23 23",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M2.673,22.418 L2.673,19.398 L17.146,19.398 L0.740,2.992 L2.875,0.857 L19.280,17.263 L19.280,2.791 L22.300,2.791 L22.300,22.418 L2.673,22.418 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function SectionTitle({
  en = 'LABEL',
  cn = '标题文字',
  dark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: 'SectionTitle_sectionTitle SectionTitle_active' + (dark ? ' SectionTitle_dark' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "SectionTitle_arrowBlock SectionTitle_active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "SectionTitle_inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "SectionTitle_arrow"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: AR
  })), /*#__PURE__*/React.createElement("div", {
    className: "SectionTitle_titleEn"
  }, en))), /*#__PURE__*/React.createElement("div", {
    className: "SectionTitle_titleCn"
  }, cn)));
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/display/TagDate.jsx
try { (() => {
function TagDate({
  tag,
  date,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_infoCurrent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__04-Information_tagAndDate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "__04-Information_tag"
  }, tag), /*#__PURE__*/React.createElement("span", {
    className: "__04-Information_date"
  }, date))));
}
Object.assign(__ds_scope, { TagDate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TagDate.jsx", error: String((e && e.message) || e) }); }

// components/display/TitleBlock.jsx
try { (() => {
function TitleBlock({
  subtitle,
  time,
  title,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_sectionContainer ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_titleContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_subtitle"
  }, subtitle, time && /*#__PURE__*/React.createElement("span", {
    className: "__06-Notice_time"
  }, time)), /*#__PURE__*/React.createElement("div", {
    className: "__06-Notice_title"
  }, title)));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ModalFrame.jsx
try { (() => {
const CLOSE = {
    "vb": "0 0 57 57",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M28.137,20.301 L48.026,0.414 L55.651,8.038 L35.762,27.925 L28.137,20.301 ZM56.625,48.787 L49.000,56.411 L28.137,35.550 L35.762,27.925 L56.625,48.787 ZM8.428,55.256 L0.803,47.632 L20.511,27.925 L28.137,35.550 L8.428,55.256 ZM1.777,9.193 L9.402,1.568 L28.137,20.301 L20.511,27.925 L1.777,9.193 Z\"></path>"
  },
  PTS = {
    "vb": "0 0 92 15",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M89.241,3.113 C88.381,3.113 87.684,2.416 87.684,1.557 C87.684,0.697 88.381,-0.000 89.241,-0.000 C90.101,-0.000 90.798,0.697 90.798,1.557 C90.798,2.416 90.101,3.113 89.241,3.113 ZM78.345,14.010 C77.485,14.010 76.788,13.313 76.788,12.453 C76.788,11.593 77.485,10.896 78.345,10.896 C79.204,10.896 79.901,11.593 79.901,12.453 C79.901,13.313 79.204,14.010 78.345,14.010 ZM78.345,3.113 C77.485,3.113 76.788,2.416 76.788,1.557 C76.788,0.697 77.485,-0.000 78.345,-0.000 C79.204,-0.000 79.901,0.697 79.901,1.557 C79.901,2.416 79.204,3.113 78.345,3.113 ZM67.448,14.010 C66.588,14.010 65.891,13.313 65.891,12.453 C65.891,11.593 66.588,10.896 67.448,10.896 C68.308,10.896 69.005,11.593 69.005,12.453 C69.005,13.313 68.308,14.010 67.448,14.010 ZM67.448,3.113 C66.588,3.113 65.891,2.416 65.891,1.557 C65.891,0.697 66.588,-0.000 67.448,-0.000 C68.308,-0.000 69.005,0.697 69.005,1.557 C69.005,2.416 68.308,3.113 67.448,3.113 ZM56.552,14.010 C56.498,14.010 56.448,13.999 56.396,13.994 C56.344,13.999 56.294,14.010 56.241,14.010 C55.381,14.010 54.684,13.313 54.684,12.453 C54.684,11.593 55.381,10.896 56.241,10.896 C56.294,10.896 56.344,10.907 56.396,10.912 C56.448,10.907 56.498,10.896 56.552,10.896 C57.411,10.896 58.108,11.593 58.108,12.453 C58.108,13.313 57.411,14.010 56.552,14.010 ZM56.552,3.113 C56.498,3.113 56.448,3.103 56.396,3.098 C56.344,3.103 56.294,3.113 56.241,3.113 C55.381,3.113 54.684,2.416 54.684,1.557 C54.684,0.697 55.381,-0.000 56.241,-0.000 C56.294,-0.000 56.344,0.010 56.396,0.016 C56.448,0.010 56.498,-0.000 56.552,-0.000 C57.411,-0.000 58.108,0.697 58.108,1.557 C58.108,2.416 57.411,3.113 56.552,3.113 ZM45.655,14.010 C45.602,14.010 45.552,13.999 45.500,13.994 C45.448,13.999 45.398,14.010 45.345,14.010 C44.485,14.010 43.788,13.313 43.788,12.453 C43.788,11.593 44.485,10.896 45.345,10.896 C45.398,10.896 45.448,10.907 45.500,10.912 C45.552,10.907 45.602,10.896 45.655,10.896 C46.515,10.896 47.212,11.593 47.212,12.453 C47.212,13.313 46.515,14.010 45.655,14.010 ZM45.655,3.113 C45.602,3.113 45.552,3.103 45.500,3.098 C45.448,3.103 45.398,3.113 45.345,3.113 C44.485,3.113 43.788,2.416 43.788,1.557 C43.788,0.697 44.485,-0.000 45.345,-0.000 C45.398,-0.000 45.448,0.010 45.500,0.016 C45.552,0.010 45.602,-0.000 45.655,-0.000 C46.515,-0.000 47.212,0.697 47.212,1.557 C47.212,2.416 46.515,3.113 45.655,3.113 ZM34.759,14.010 C34.705,14.010 34.655,13.999 34.603,13.994 C34.552,13.999 34.501,14.010 34.448,14.010 C33.588,14.010 32.891,13.313 32.891,12.453 C32.891,11.593 33.588,10.896 34.448,10.896 C34.501,10.896 34.552,10.907 34.603,10.912 C34.655,10.907 34.705,10.896 34.759,10.896 C35.618,10.896 36.315,11.593 36.315,12.453 C36.315,13.313 35.618,14.010 34.759,14.010 ZM34.759,3.113 C34.705,3.113 34.655,3.103 34.603,3.098 C34.552,3.103 34.501,3.113 34.448,3.113 C33.588,3.113 32.891,2.416 32.891,1.557 C32.891,0.697 33.588,-0.000 34.448,-0.000 C34.501,-0.000 34.552,0.010 34.603,0.016 C34.655,0.010 34.705,-0.000 34.759,-0.000 C35.618,-0.000 36.315,0.697 36.315,1.557 C36.315,2.416 35.618,3.113 34.759,3.113 ZM23.551,14.010 C22.692,14.010 21.995,13.313 21.995,12.453 C21.995,11.593 22.692,10.896 23.551,10.896 C24.411,10.896 25.108,11.593 25.108,12.453 C25.108,13.313 24.411,14.010 23.551,14.010 ZM23.551,3.113 C22.692,3.113 21.995,2.416 21.995,1.557 C21.995,0.697 22.692,-0.000 23.551,-0.000 C24.411,-0.000 25.108,0.697 25.108,1.557 C25.108,2.416 24.411,3.113 23.551,3.113 ZM12.655,14.010 C11.795,14.010 11.098,13.313 11.098,12.453 C11.098,11.593 11.795,10.896 12.655,10.896 C13.515,10.896 14.212,11.593 14.212,12.453 C14.212,13.313 13.515,14.010 12.655,14.010 ZM12.655,3.113 C11.795,3.113 11.098,2.416 11.098,1.557 C11.098,0.697 11.795,-0.000 12.655,-0.000 C13.515,-0.000 14.212,0.697 14.212,1.557 C14.212,2.416 13.515,3.113 12.655,3.113 ZM1.759,14.010 C0.899,14.010 0.202,13.313 0.202,12.453 C0.202,11.593 0.899,10.896 1.759,10.896 C2.618,10.896 3.315,11.593 3.315,12.453 C3.315,13.313 2.618,14.010 1.759,14.010 ZM1.759,3.113 C0.899,3.113 0.202,2.416 0.202,1.557 C0.202,0.697 0.899,-0.000 1.759,-0.000 C2.618,-0.000 3.315,0.697 3.315,1.557 C3.315,2.416 2.618,3.113 1.759,3.113 ZM89.241,10.896 C90.101,10.896 90.798,11.593 90.798,12.453 C90.798,13.313 90.101,14.010 89.241,14.010 C88.381,14.010 87.684,13.313 87.684,12.453 C87.684,11.593 88.381,10.896 89.241,10.896 Z\"></path>"
  };
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function ModalFrame({
  title = '标题文字',
  small = false,
  onClose,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ef-scope"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'ModalFrame_modalFrame' + (small ? ' ModalFrame_smallTitle' : ''),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ModalFrame_header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ModalFrame_title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ModalFrame_points"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: PTS
  })), /*#__PURE__*/React.createElement("span", {
    className: "ModalFrame_close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: CLOSE
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '24px 28px'
    }
  }, children)));
}
Object.assign(__ds_scope, { ModalFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ModalFrame.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  visible = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Toast_toast' + (visible ? ' Toast_visible' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "Toast_content"
  }, children)));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DownloadTile.jsx
try { (() => {
function DownloadTile({
  children,
  icon,
  disabled = false,
  onClick,
  style
}) {
  const cls = ['downloader_item', disabled && 'downloader_disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "downloader_platforms"
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: onClick
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: "downloader_text"
  }, children))));
}
Object.assign(__ds_scope, { DownloadTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DownloadTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownTrigger.jsx
try { (() => {
const CH = {
  "vb": "0 0 21 22",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M20.956,10.957 C20.956,15.921 17.454,20.065 12.785,21.064 L12.785,18.098 C15.849,17.167 18.080,14.323 18.080,10.956 C18.080,8.420 16.813,6.183 14.879,4.834 L12.785,6.951 L12.785,3.814 L12.785,0.849 L12.785,0.741 L18.932,0.738 L16.919,2.773 C19.372,4.663 20.956,7.622 20.956,10.957 ZM4.307,19.146 C1.850,17.256 0.263,14.295 0.263,10.957 C0.263,5.992 3.765,1.849 8.434,0.850 L8.434,3.814 C5.370,4.745 3.139,7.590 3.139,10.956 C3.139,13.501 4.416,15.744 6.362,17.091 L8.437,15.017 L8.437,21.231 L2.220,21.231 L4.307,19.146 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function DropdownTrigger({
  value,
  label = '切换账号',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_reserveModal ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_modalContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_contentContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_currentAccount"
  }, value != null && /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_number"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "ReserveModal_switch",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "ReserveModal_text"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ReserveModal_switchButton"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ReserveModal_switchIcon"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: CH
  }))))))));
}
Object.assign(__ds_scope, { DropdownTrigger });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownTrigger.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavSidebar.jsx
try { (() => {
const ICONS = {
  home: {
    "vb": "0 0 40 40",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M35.744,33.156 L39.625,29.275 L31.369,21.019 L31.369,18.013 L39.616,9.766 L35.735,5.885 L26.176,15.443 L26.192,15.459 L26.185,15.459 L26.185,16.780 L22.854,16.780 L22.854,13.449 L24.184,13.449 L24.184,13.442 L24.191,13.449 L33.750,3.890 L29.869,0.009 L21.612,8.265 L18.606,8.265 L10.359,0.018 L6.478,3.899 L16.037,13.458 L16.053,13.442 L16.053,13.449 L17.365,13.449 L17.365,16.780 L14.042,16.780 L14.042,15.451 L14.035,15.451 L14.042,15.443 L4.484,5.885 L0.603,9.766 L8.859,18.022 L8.859,21.028 L0.612,29.275 L4.493,33.156 L14.052,23.597 L14.036,23.582 L14.042,23.582 L14.042,22.269 L17.365,22.269 L17.365,25.592 L16.044,25.592 L16.044,25.599 L16.037,25.592 L6.478,35.151 L10.359,39.032 L18.615,30.776 L21.622,30.776 L29.869,39.023 L33.750,35.142 L24.191,25.583 L24.175,25.599 L24.175,25.592 L22.854,25.592 L22.854,22.269 L26.185,22.269 L26.185,23.590 L26.193,23.590 L26.185,23.597 L35.744,33.156 Z\"></path>"
  },
  operator: {
    "vb": "0 0 44 49",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M43.057,48.470 L37.334,48.470 L6.667,48.470 L0.942,48.470 L0.942,40.719 L0.942,15.502 L0.941,15.502 L0.941,6.304 L0.942,6.304 L0.942,6.301 L6.667,6.301 L6.667,6.304 L9.743,6.304 L9.743,10.903 L34.526,10.903 L34.526,6.304 L37.334,6.304 L37.334,6.301 L43.058,6.301 L43.058,48.470 L43.057,48.470 ZM37.334,15.502 L6.667,15.502 L6.667,40.719 L10.448,40.719 L10.448,35.267 C10.448,32.112 12.951,29.554 16.037,29.554 L27.963,29.554 C31.049,29.554 33.551,32.112 33.551,35.267 L33.551,40.719 L37.334,40.719 L37.334,15.502 ZM22.000,27.793 C19.155,27.793 16.848,25.434 16.848,22.526 C16.848,19.617 19.155,17.259 22.000,17.259 C24.845,17.259 27.152,19.617 27.152,22.526 C27.152,25.434 24.845,27.793 22.000,27.793 ZM9.743,0.506 L34.526,0.506 L34.526,6.304 L9.743,6.304 L9.743,0.506 Z\"></path>"
  },
  lore: {
    "vb": "0 0 42 42",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M36.038,32.520 L36.038,5.876 L15.483,5.876 L15.483,0.188 L41.891,0.188 L41.891,32.520 L36.038,32.520 ZM15.614,9.516 L15.483,9.643 L15.483,9.787 L11.414,13.741 L6.027,8.506 L1.825,4.423 L1.861,4.388 L1.787,4.316 L6.060,0.164 L11.829,5.769 L15.445,9.283 L15.649,9.482 L15.614,9.516 ZM6.027,35.043 L22.791,35.043 L22.791,40.731 L0.173,40.731 L0.173,13.742 L6.027,13.742 L6.027,35.043 ZM15.652,24.914 L15.652,31.990 L8.255,31.990 L8.255,24.800 L15.535,24.800 L15.652,24.800 L15.652,9.476 L31.421,9.476 L31.421,24.800 L23.479,24.800 L23.479,32.518 L23.479,32.520 L15.652,24.914 ZM31.513,32.808 L34.107,35.331 L36.934,38.078 L33.068,41.835 L32.228,41.019 L26.374,35.331 L23.778,32.808 L23.479,32.518 L27.347,28.759 L31.513,32.808 Z\"></path>"
  },
  calendar: {
    "vb": "0 0 42 40",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M-0.002,40.010 L-0.002,5.448 L5.894,5.448 L5.894,10.171 L6.956,10.171 L6.956,8.485 L6.956,5.448 L6.956,-0.008 L12.072,-0.008 L12.072,5.448 L12.072,8.485 L12.072,10.171 L13.134,10.171 L13.134,5.448 L28.881,5.448 L28.881,10.171 L29.943,10.171 L29.943,8.485 L29.940,8.485 L29.940,-0.008 L35.056,-0.008 L35.056,5.448 L35.059,5.448 L35.059,10.171 L36.121,10.171 L36.121,5.448 L42.014,5.448 L42.014,40.010 L-0.002,40.010 ZM38.159,16.680 L3.853,16.680 L3.853,35.999 L38.159,35.999 L38.159,16.680 ZM9.511,22.456 L6.956,22.456 L6.956,19.889 L9.511,19.889 L9.511,22.456 ZM12.065,25.023 L9.511,25.023 L9.511,22.456 L12.065,22.456 L12.065,25.023 ZM12.065,30.156 L9.511,30.156 L9.511,27.590 L12.065,27.590 L12.065,30.156 ZM17.174,27.590 L17.174,30.156 L14.620,30.156 L14.620,27.590 L17.174,27.590 ZM22.283,27.590 L22.283,30.156 L19.729,30.156 L19.729,27.590 L22.283,27.590 ZM27.392,27.590 L27.392,30.156 L24.838,30.156 L24.838,27.590 L27.392,27.590 ZM32.501,27.590 L32.501,30.156 L29.947,30.156 L29.947,27.590 L32.501,27.590 ZM29.947,22.456 L32.501,22.456 L32.501,25.023 L29.947,25.023 L29.947,22.456 ZM24.838,25.023 L24.838,22.456 L27.392,22.456 L27.392,25.023 L24.838,25.023 ZM19.729,25.023 L19.729,22.456 L22.283,22.456 L22.283,25.023 L19.729,25.023 ZM14.620,25.023 L14.620,22.456 L17.174,22.456 L17.174,25.023 L14.620,25.023 ZM14.620,27.590 L12.065,27.590 L12.065,25.023 L14.620,25.023 L14.620,27.590 ZM19.729,25.023 L19.729,27.590 L17.174,27.590 L17.174,25.023 L19.729,25.023 ZM24.838,25.023 L24.838,27.590 L22.283,27.590 L22.283,25.023 L24.838,25.023 ZM29.947,25.023 L29.947,27.590 L27.392,27.590 L27.392,25.023 L29.947,25.023 ZM12.065,19.889 L14.620,19.889 L14.620,22.456 L12.065,22.456 L12.065,19.889 ZM17.174,19.889 L19.729,19.889 L19.729,22.456 L17.174,22.456 L17.174,19.889 ZM22.283,19.889 L24.838,19.889 L24.838,22.456 L22.283,22.456 L22.283,19.889 ZM27.392,19.889 L29.947,19.889 L29.947,22.456 L27.392,22.456 L27.392,19.889 ZM35.056,19.889 L35.056,22.456 L32.501,22.456 L32.501,19.889 L35.056,19.889 ZM35.056,25.023 L35.056,27.590 L32.501,27.590 L32.501,25.023 L35.056,25.023 ZM35.056,32.724 L32.501,32.724 L32.501,30.156 L35.056,30.156 L35.056,32.724 ZM29.947,32.724 L27.392,32.724 L27.392,30.156 L29.947,30.156 L29.947,32.724 ZM24.838,32.724 L22.283,32.724 L22.283,30.156 L24.838,30.156 L24.838,32.724 ZM19.729,32.724 L17.174,32.724 L17.174,30.156 L19.729,30.156 L19.729,32.724 ZM14.620,32.724 L12.065,32.724 L12.065,30.156 L14.620,30.156 L14.620,32.724 ZM6.956,32.724 L6.956,30.156 L9.511,30.156 L9.511,32.724 L6.956,32.724 ZM6.956,27.590 L6.956,25.023 L9.511,25.023 L9.511,27.590 L6.956,27.590 Z\"></path>"
  },
  notice: {
    "vb": "0 0 44 49",
    "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M17.123,48.243 L17.123,8.711 L35.000,20.840 L43.285,20.840 L43.285,36.113 L35.000,36.113 L17.123,48.243 ZM9.253,0.256 L14.966,0.256 L14.966,5.930 L9.253,5.930 L9.253,0.256 ZM0.967,0.256 L6.680,0.256 L6.680,5.930 L0.967,5.930 L0.967,0.256 ZM13.264,15.581 L6.882,15.581 L6.882,41.372 L13.264,41.372 L13.264,46.884 L1.332,46.884 L1.332,10.069 L13.264,10.069 L13.264,15.581 ZM34.848,47.434 L34.848,39.054 L43.285,39.054 L34.848,47.434 Z\"></path>"
  }
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function NavSidebar({
  items = [{
    key: 'home',
    label: '首页'
  }, {
    key: 'operator',
    label: '列表'
  }, {
    key: 'lore',
    label: '归档'
  }, {
    key: 'notice',
    label: '公告'
  }, {
    key: 'calendar',
    label: '日历'
  }],
  activeIndex = 0,
  expanded = false,
  height = 360,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'Header_pcHeaderContainer' + (expanded ? ' Header_detailActive' : ''),
    style: {
      height,
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header_overlay",
    style: {
      top: activeIndex * 40,
      height: 40
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'Header_navItem' + (i === activeIndex ? ' Header_active' : ''),
    style: {
      top: i * 40
    },
    onClick: () => onSelect && onSelect(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "Header_icon",
    "data-key": it.key
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: ICONS[it.key] || ICONS.home
  })), /*#__PURE__*/React.createElement("span", {
    className: "Header_textWrapper"
  }, it.label))));
}
Object.assign(__ds_scope, { NavSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavSidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Selector.jsx
try { (() => {
function Selector({
  name = '选项名称',
  paging,
  dots = 0,
  activeDot = 0,
  onPrev,
  onNext,
  onDot,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_container ef-scope",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_navigator"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_navBtn __03-Lore_prev",
    onClick: onPrev
  }), /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_activeName"
  }, /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_inner"
  }, paging && /*#__PURE__*/React.createElement("span", {
    className: "__03-Lore_paging"
  }, paging), /*#__PURE__*/React.createElement("span", {
    className: "__03-Lore_name"
  }, name))), /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_navBtn __03-Lore_next",
    onClick: onNext
  })), dots > 0 && /*#__PURE__*/React.createElement("div", {
    className: "__03-Lore_naviDots"
  }, Array.from({
    length: dots
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: '__03-Lore_naviDot' + (i === activeDot ? ' __03-Lore_active' : ''),
    onClick: () => onDot && onDot(i)
  }))))));
}
Object.assign(__ds_scope, { Selector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Selector.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ShareButton.jsx
try { (() => {
const SH = {
  "vb": "0 0 32 20",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M0.724,19.567 L0.724,-0.014 L18.789,-0.014 L18.789,3.217 L3.930,3.217 L3.930,16.337 L28.460,16.337 L28.460,12.699 L31.666,12.699 L31.666,19.567 L0.724,19.567 ZM28.460,5.500 L21.148,12.869 L18.881,10.584 L26.193,3.217 L21.526,3.217 L21.526,-0.014 L31.666,-0.014 L31.666,10.203 L28.460,10.203 L28.460,5.500 Z\"></path>"
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function ShareButton({
  open = false,
  items = [],
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Header_pcHeaderContainer ef-scope",
    style: {
      width: 36,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Header_buttonShare' + (open ? ' Header_active' : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "Header_shareIcon"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: SH
  })), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "Header_shareList"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header_wrapper"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "Header_shareItem"
  }, it))))));
}
Object.assign(__ds_scope, { ShareButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ShareButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const AR = {
  "vb": null,
  "body": ""
};
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function Tabs({
  tabs = [],
  activeIndex = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "SubpageTab_scroll",
    style: {
      width: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "SubpageTab_subpageTab"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    className: "SubpageTab_divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: 'SubpageTab_tab' + (i === activeIndex ? ' SubpageTab_active' : ''),
    onClick: () => onSelect && onSelect(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "SubpageTab_text"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "SubpageTab_arrow"
  }, /*#__PURE__*/React.createElement(EfSvg, {
    i: AR,
    className: "SubpageTab_arrowIcon"
  })))))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityCapsule.jsx
try { (() => {
const U = [{
  "vb": "0 0 23 29",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M0.253,28.756 L0.253,18.400 C0.253,15.269 2.716,12.730 5.755,12.730 L17.498,12.730 C20.537,12.730 23.000,15.269 23.000,18.400 L23.000,28.756 L0.253,28.756 ZM11.626,10.982 C8.825,10.982 6.554,8.642 6.554,5.754 C6.554,2.867 8.825,0.527 11.626,0.527 C14.428,0.527 16.699,2.867 16.699,5.754 C16.699,8.642 14.428,10.982 11.626,10.982 Z\"></path>"
}, {
  "vb": "0 0 27 30",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M26.273,12.842 L25.645,11.890 L24.903,10.756 L25.645,9.622 L26.273,8.671 L25.645,8.671 L9.058,8.671 L9.058,7.007 L24.432,7.007 L13.186,0.503 L0.726,7.711 L0.726,22.135 L13.186,29.343 L24.432,22.838 L9.058,22.838 L9.058,21.183 L25.645,21.183 L26.273,21.183 L25.645,20.231 L24.903,19.098 L25.645,17.964 L26.273,17.012 L25.645,16.061 L24.903,14.927 L25.645,13.793 L26.273,12.842 ZM4.277,11.062 L6.374,11.062 L6.374,18.783 L4.277,18.783 L4.277,11.062 Z\"></path>"
}, {
  "vb": "0 0 20 28",
  "body": "<path fill-rule=\"evenodd\" fill=\"currentColor\" d=\"M7.405,7.332 L7.405,7.367 L0.932,7.367 L0.932,20.633 L7.405,20.633 L7.405,20.667 L19.275,27.718 L19.275,0.281 L7.405,7.332 Z\"></path>"
}];
function EfSvg({
  i,
  className,
  style
}) {
  return i ? React.createElement('svg', {
    className,
    style,
    viewBox: i.vb,
    xmlns: 'http://www.w3.org/2000/svg',
    dangerouslySetInnerHTML: {
      __html: i.body
    }
  }) : null;
}
function UtilityCapsule({
  buttons,
  expanded = false,
  style
}) {
  const btns = buttons && buttons.length ? buttons : U.map((ic, i) => ({
    icon: React.createElement(EfSvg, {
      i: ic
    }),
    label: '工具' + (i + 1)
  }));
  const n = btns.length;
  return /*#__PURE__*/React.createElement("div", {
    className: 'Header_pcHeaderContainer ef-scope' + (expanded ? ' Header_detailActive' : ''),
    style: {
      width: expanded ? 156 : 30,
      height: n * 30 + 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Header_buttonFrameBg Header_ele' + n,
    style: {
      height: n * 30 + 2.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "Header_buttonFrameContainer",
    style: {
      height: n * 30 + 2.5
    }
  }, btns.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    className: "Header_divider",
    style: {
      transform: 'translate3d(10px,' + (i * 30 + 2) + 'px,0)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "Header_button",
    style: {
      transform: 'translate3d(0,' + (i * 30 + 4) + 'px,0)'
    },
    onClick: b.onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "Header_icon"
  }, b.icon), /*#__PURE__*/React.createElement("span", {
    className: "Header_textWrapper"
  }, b.label))))));
}
Object.assign(__ds_scope, { UtilityCapsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityCapsule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
const {
  HomeButton,
  DownloadTile,
  SectionTitle,
  LabelTag,
  Pagination,
  NoticeCard,
  TitleBlock,
  HollowText,
  DividerBand,
  AvatarChip,
  TagDate,
  PlayButton
} = window.DesignSystem_e77ad3;
function EfHomeScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      background: 'url(../../assets/textures/bg.jpg) center/cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,.35),transparent 45%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      bottom: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Novecentosanswide-Bold',
      fontSize: 64,
      letterSpacing: -2,
      lineHeight: 1,
      color: '#fff',
      textShadow: '0 0 12px rgba(0,0,0,.5)'
    }
  }, "PRODUCT NAME"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 13,
      color: '#fff',
      letterSpacing: 2
    }
  }, "INDUSTRIAL DESIGN SYSTEM \u2014 SAMPLE SITE"), /*#__PURE__*/React.createElement(HomeButton, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icons/notice.svg",
      style: {
        width: 18
      }
    })
  }, "\u5F00\u59CB\u4F7F\u7528"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(DownloadTile, null, "\u5E73\u53F0 A"), /*#__PURE__*/React.createElement(DownloadTile, null, "\u5E73\u53F0 B"), /*#__PURE__*/React.createElement(DownloadTile, null, "PC"), /*#__PURE__*/React.createElement(DownloadTile, {
    disabled: true
  }, "\u656C\u8BF7\u671F\u5F85"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 28,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/textures/scroll_tip.png",
    style: {
      width: 22,
      opacity: .85
    }
  })));
}
function EfArchiveScreen() {
  const items = [{
    n: '条目 Alpha',
    type: '类型 A'
  }, {
    n: '条目 Beta',
    type: '类型 B'
  }, {
    n: '条目 Gamma',
    type: '类型 A'
  }, {
    n: '条目 Delta',
    type: '类型 C'
  }];
  const [i, setI] = React.useState(0);
  const it = items[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      background: '#f2f2f2',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 0,
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(HollowText, {
    size: 96
  }, "ARCHIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 120
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    en: "ARCHIVE",
    cn: "\u6863\u6848"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '52%',
      transform: 'translate(-50%,-50%)',
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: '#d9d9d9',
      boxShadow: '0 0 24px rgba(0,0,0,.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'SpaceGrotesk',
      fontSize: 20,
      color: '#999'
    }
  }, "IMAGE SLOT"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      top: 220,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'SansBold',
      fontSize: 40,
      lineHeight: 1
    }
  }, it.n), /*#__PURE__*/React.createElement(LabelTag, {
    label: "\u7C7B\u578B",
    value: it.type
  }), /*#__PURE__*/React.createElement(LabelTag, {
    yellow: true,
    label: "\u6807\u6CE8",
    value: "\u793A\u4F8B"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 40,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center'
    }
  }, items.map((o, j) => /*#__PURE__*/React.createElement(AvatarChip, {
    key: j,
    active: j === i,
    onClick: () => setI(j)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(DividerBand, {
    subtitle: "ARCHIVE FILE",
    title: "\u6863\u6848\u6761\u76EE",
    width: "100%"
  })));
}
function EfNoticeScreen() {
  const items = [{
    img: '../../assets/textures/bg.jpg',
    cat: '公告',
    date: '2026-01-17',
    title: '版本更新公告'
  }, {
    img: '../../assets/textures/02Bg.jpg',
    cat: '活动',
    date: '2026-01-09',
    title: '活动情报汇总'
  }, {
    img: '../../assets/textures/tape-wave-bg.png',
    cat: '情报',
    date: '2025-12-28',
    title: '开发进度报告'
  }];
  const [i, setI] = React.useState(0);
  const it = items[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      background: '#fff',
      padding: '56px 64px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    en: "LATEST NEWS",
    cn: "\u6700\u65B0\u60C5\u62A5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 56,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(NoticeCard, {
    image: it.img
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TagDate, {
    tag: it.cat,
    date: it.date
  }), /*#__PURE__*/React.createElement(TitleBlock, {
    subtitle: it.cat,
    time: it.date,
    title: it.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    current: i + 1,
    total: items.length,
    onPrev: () => setI((i + items.length - 1) % items.length),
    onNext: () => setI((i + 1) % items.length)
  }), /*#__PURE__*/React.createElement(PlayButton, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      backgroundImage: 'var(--color-bar)',
      width: 196,
      marginLeft: 'auto',
      marginRight: 24,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement(HollowText, {
    size: 72
  }, "LATEST NEWS")));
}
Object.assign(window, {
  EfHomeScreen,
  EfOperatorScreen: EfArchiveScreen,
  EfNoticeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BackButton = __ds_scope.BackButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CloseButton = __ds_scope.CloseButton;

__ds_ns.Cta = __ds_scope.Cta;

__ds_ns.HomeButton = __ds_scope.HomeButton;

__ds_ns.ListButton = __ds_scope.ListButton;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.PlayButton = __ds_scope.PlayButton;

__ds_ns.RoundButton = __ds_scope.RoundButton;

__ds_ns.AvatarChip = __ds_scope.AvatarChip;

__ds_ns.ColorDeco = __ds_scope.ColorDeco;

__ds_ns.DividerBand = __ds_scope.DividerBand;

__ds_ns.HollowText = __ds_scope.HollowText;

__ds_ns.ItemIcon = __ds_scope.ItemIcon;

__ds_ns.LabelTag = __ds_scope.LabelTag;

__ds_ns.NoticeCard = __ds_scope.NoticeCard;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.TagDate = __ds_scope.TagDate;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

__ds_ns.ModalFrame = __ds_scope.ModalFrame;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.DownloadTile = __ds_scope.DownloadTile;

__ds_ns.DropdownTrigger = __ds_scope.DropdownTrigger;

__ds_ns.NavSidebar = __ds_scope.NavSidebar;

__ds_ns.Selector = __ds_scope.Selector;

__ds_ns.ShareButton = __ds_scope.ShareButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.UtilityCapsule = __ds_scope.UtilityCapsule;

})();
