# The Constellarium

A personal poetry website by **Mitraa Srinivasan**. Every poem lives as a star in a navigable 3D night sky. Drag to explore, click a star (or a row in the index) to open a piece in a theatre-dark reader, where stanzas rise one by one and acrostic letters glow along the spine of the poem.

Live site: `https://mitraa-srinivasan.github.io/constellarium/`

## About

The Constellarium currently holds twelve original poems, with space reserved for future prose, fiction, and essays. It's a single-page, no-build static site — everything runs client-side, no server or database required.

## Built with

- **HTML / CSS / vanilla JavaScript** — no framework, no build step, no dependencies to install
- **[Three.js](https://threejs.org/)** (r128, bundled locally as `three.min.js` so the sky renders even offline) — powers the WebGL night sky, starfield, and camera movement
- **Google Fonts** — Bodoni Moda, Cormorant Garamond, and Space Grotesk

## Project structure

| File | Purpose |
|---|---|
| `index.html` | The entire site: layout, styling, 3D sky, and reader logic |
| `writings.js` | All poems and site copy — the only file touched to publish new work |
| `three.min.js` | The bundled Three.js library (MIT-licensed, see [Third-party code](#third-party-code)) |
| `LICENSE` | Copyright and usage terms for this repository |

## Copyright & Licensing

**All poems, prose, and other written content on this site are original work by Mitraa Srinivasan, written entirely by hand with no AI/LLM tools, ghostwriters, or unattributed outside material were used at any stage.** Mitraa Srinivasan is the sole author and holds full copyright over all creative content published here, from the moment each piece is written (copyright exists automatically under law; publishing here does not diminish that).

**© 2026 Mitraa Srinivasan. All rights reserved.**

No part of the creative writing on this site may be copied, reposted, redistributed, translated, adapted, or used to train or fine-tune any AI/ML model without prior written permission. Short excerpts (a line or two) may be quoted for criticism, commentary, or review with clear attribution and a link back to the original, consistent with fair use.

Full terms are in [`LICENSE`](./LICENSE). For reprint, translation, or other permission requests, contact **mitraasrinivasan@gmail.com**.

### Third-party code

The site scaffold (layout, animation, reader) is treated as part of this all-rights-reserved repository. The bundled `three.min.js` library is the exception — it remains under its original [MIT License](https://github.com/mrdoob/three.js/blob/dev/LICENSE) from the Three.js project (mrdoob and contributors).

