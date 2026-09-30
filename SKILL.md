---
name: endfield-design
description: Use this skill to generate interfaces and assets in the Endfield industrial sci-fi style (signal yellow on ink, hazard stripes, engineering deco), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Deliberately brand-free and generic.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules:
- One accent only: signal yellow #fffa00 on ink #191919 / white. Pink #ff1aac + green #00ffa2 exist only inside the "color bar" deco.
- Near-square radii (2px, 4px; 6px on hover), 45° hazard stripes, dot-matrix textures, soft ambient shadows only.
- Fonts: SansRegular/Medium/Bold (UI, CJK), Gilroy (EN display labels), Novecento Sans Wide (numerals/giant type), Space Grotesk (tech readouts). All shipped in assets/fonts.
- Icons: only the extracted inline SVGs in assets/icons (currentColor, angular). No emoji, no third-party icon sets, no social-network logos (pass your own to ShareButton).
- Keep content generic: no game copy, no fake personal data (use neutral IDs like ID-000000).
- Controls: use css/controls.css classes (source-site CSS, px units) or the React components; wrap scoped controls in class "ef-scope".

Known gaps (v1 built from provided pack only): no form controls (text input, checkbox, radio, switch, slider), no table/list rows, no tooltip/dropdown menu panel, no loading states, no mobile (H5) variants.
