# The Constellarium

A personal poetry website by **Mitraa Srinivasan**. Every poem lives as a star in a navigable 3D night sky — drag to explore, click a star (or a row in the index) to open a piece in a theatre-dark reader, where stanzas rise one by one and acrostic letters glow along the spine of the poem.

Live site: `https://<your-github-username>.github.io/<your-repo-name>/`
*(replace with the actual URL once GitHub Pages is enabled — see [Publishing](#publishing-to-github-pages) below)*

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

## Running it locally

1. Open this folder in VS Code (`File → Open Folder`)
2. Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**
3. (Or just double-click `index.html` — it works without a server too)

## Adding a new piece

Open `writings.js`, copy an existing entry from the `WRITINGS` array, paste it at the top, and fill in `title`, `kind`, `date`, `excerpt`, and `body`. Save and refresh — a new star appears in the sky and a new row appears in the index automatically.

## Copyright & Licensing

**All poems, prose, and other written content on this site are original work by Mitraa Srinivasan, written entirely by hand — no AI/LLM tools, ghostwriters, or unattributed outside material were used at any stage.** Mitraa Srinivasan is the sole author and holds full copyright over all creative content published here, from the moment each piece is written (copyright exists automatically under law; publishing here does not diminish that).

**© 2026 Mitraa Srinivasan. All rights reserved.**

No part of the creative writing on this site may be copied, reposted, redistributed, translated, adapted, or used to train or fine-tune any AI/ML model without prior written permission. Short excerpts (a line or two) may be quoted for criticism, commentary, or review with clear attribution and a link back to the original, consistent with fair use.

Full terms are in [`LICENSE`](./LICENSE). For reprint, translation, or other permission requests, contact **leesangsun130507@gmail.com**.

### Third-party code

The site scaffold (layout, animation, reader) is treated as part of this all-rights-reserved repository. The bundled `three.min.js` library is the exception — it remains under its original [MIT License](https://github.com/mrdoob/three.js/blob/dev/LICENSE) from the Three.js project (mrdoob and contributors).

## Protecting the content

A public website's HTML, CSS, and JavaScript can always be viewed by a browser — that's how the web works, and no front-end trick can change it for someone determined enough (view-source, network inspection, or simply saving the page all still work). What this site *does* do to cut down on casual copying:

- Right-click / context menu is disabled
- Text selection and drag are disabled on poem text specifically
- Common DevTools shortcuts (F12, Ctrl/Cmd+Shift+I/J/C, Ctrl/Cmd+U) are blocked
- A console message states the copyright and contact info to anyone who does open DevTools
- `noai`/`noimageai` meta tags signal to crawlers that respect them not to use this content for AI training (not universally honored, but a documented opt-out signal)

The real protection is legal, not technical: the explicit copyright notice above, the `LICENSE` file, and the fact that authorship and timestamps are documented in this repository's history. If you ever find your work copied elsewhere, that documentation is what supports a takedown request (e.g., a DMCA notice to the hosting platform) or other legal action.

## Publishing to GitHub Pages

See the step-by-step guide provided alongside this README, or GitHub's own docs at [docs.github.com/pages](https://docs.github.com/en/pages).
