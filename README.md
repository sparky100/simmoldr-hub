# simmodlr-hub
Static marketing site for simmodlr.app, deployed with Cloudflare Pages.

## Structure
simmodlr is a family of apps. The site has one family landing page and one page per app.

| Path | What it is |
| --- | --- |
| `index.html` | Family landing page at simmodlr.app: introduces simmodlr and lists the apps. |
| `flow/index.html` | Flow's page at simmodlr.app/flow/. The app itself runs at https://flow.simmodlr.app/. |
| `flow/images/` | Images used only by the Flow page. |
| `loop/index.html` | Loop's page at simmodlr.app/loop/. The app itself runs at https://loop.simmodlr.app/. Draft: an example published simulator still to add, so it stays `noindex`. |
| `loop/images/` | Images used only by the Loop page. |
| `atlas/index.html` | Atlas's page at simmodlr.app/atlas/. The app runs at https://atlas.simmodlr.app/. Draft: screenshots and contact details still to add, so it stays `noindex`. |
| `assets/site.css` | Shared styles (themes, nav, footer, sections, app cards, FAQ). Every page uses it. |
| `assets/site.js` | Shared behaviour (theme, scroll reveal, chart animation). |
| `templates/app-page.html` | Starting point for a new app page: hero, features, example, FAQ, CTA. |
| `docs/user-guide/` | Flow user guide. |

Drafts and archives: `index-proposal.html`, `index-selector.html`, `old.html`, `index.oldhtml`, `images/Archive/`.

## Adding an app
1. Copy `templates/app-page.html` to `<app>/index.html` and fill in the `{{PLACEHOLDERS}}`. Remove the `noindex` meta tag.
2. Put the app's images in `<app>/images/`.
3. In `index.html`, add a card to the `#apps` grid. Add the app to the footer links on every page.
4. The app itself lives on its own subdomain, `<app>.simmodlr.app`.

Nav and footer markup is repeated in each page (there is no build step), so keep them in step when you change them.
