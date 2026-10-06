# 已发布的 Artifact

仓库中的文件是源文件；下表列出每个 artifact 对应的目录。修改时先改仓库，再从仓库发布，最后提交。

| Artifact | 链接 | 仓库位置 | 说明 |
| --- | --- | --- | --- |
| ENDFIELD（设计系统，HTML 版） | https://claude.ai/artifact/2TyxMUtY81986QL6AeaHkv | `design-system/project/` | 资源图片与字体的原件在 `assets/`、`fonts/` |
| ENDFIELD React（设计系统，React 版） | https://claude.ai/artifact/Y7GzkWZhPQVDPaAWQf1Due | `design-system-react/project/` | 组件源码在 `project/components/src/`，预览源码在 `previews/`，构建脚本在 `tools/` |

## 由设计系统页面生成的文件

`design-system/project/` 下的 `tokens.css`、`manifest.json` 与 `api/` 由设计系统页面在页面内保存时生成；从仓库发布 `tokens.json` 不会触发重新生成。修改 `tokens.json` 后运行 `python3 design-system/tools/compile-tokens.py`，它按页面的生成格式重建 `tokens.css` 与 `api/tokens.md`，再与 `tokens.json` 一起发布。`manifest.json` 与 `api/` 下的其他文件不要手改。`api/assets/References.md` 对应一组已撤回的参考截图，图片保存在提交 3ac5bb4 中。
