# sajithpradeep.netlify.app

Personal portfolio — React (Create React App), deployed on Netlify.

## Running it

```bash
npm install
npm start          # dev server at localhost:3000
npm test           # test suite
npm run build      # production bundle into build/
python scripts/serve_build.py    # preview the built site with SPA routing
```

## Where the content lives

**All copy is in `src/data/`.** You should not need to open a component to change
what the site says.

| File | Contains |
|---|---|
| `src/data/site.js` | Name, contact details, hero copy, About page, capabilities, timeline, AI positioning |
| `src/data/caseStudies.js` | Every case study on the Work page |

### Adding a case study

Append an object to the `caseStudies` array. The shape:

```js
{
  id: 'unique-slug',
  group: 'pm' | 'ba' | 'eng',
  featured: true,          // surfaces it on the home page
  title, org, role, period, industry, status,
  summary,                 // one sentence, shown collapsed
  problem,                 // the context
  approach: [],            // what you did
  decisions: [],           // the calls you owned — the section hiring managers read
  outcome: [ { text, tier } ],
  reflection,              // optional
  stack: [],
}
```

### Outcome tiers

Every outcome carries a provenance tag, rendered as a badge:

- `measured` — someone actually recorded this number
- `modeled` — derived from known inputs; be ready to show the arithmetic
- `scope` — a fact about size, not about results

This is deliberate. Unsourced percentages get you through a résumé screen and
then fall apart in the interview, because the first follow-up is always *"how
did you measure that?"* A claim you can defend beats a bigger one you can't.

## Structure

```
src/
  App.js                  routes, theme, page transitions
  components/             one component per route + Navbar/Footer/scroll helpers
  data/                   all site content
  hooks/
    useTheme.js           light/dark, persisted, follows OS until set explicitly
    useReveal.js          scroll-triggered entrance animations
  styles/                 one stylesheet per component
    GlobalStyles.css      design tokens — colours, type, spacing, shared primitives
```

Colours, fonts and spacing are CSS custom properties in `GlobalStyles.css`.
Change them there rather than in individual component styles.

## Notes

- Routing is client-side; `public/_redirects` gives Netlify the SPA fallback.
- Dark mode follows the OS until the visitor uses the toggle, then persists.
- Animations respect `prefers-reduced-motion`.
- `src/components/Blogs.jsx` still exists but has no route. Restore it by adding
  the route in `App.js` and the link in `Navbar.jsx` — once there are real posts.
