# cleanyourtv-ui-web

The site of [CleanYourTV UI](https://github.com/matheus-caldeira/cleanyourtv-ui), an Apple TV-style home screen for
Android TV: what it is, how to install the one release APK or build it from a clone, and a form that writes a TV's
`config.json` (TMDB key, city, look, shelf and the remote's buttons) in the browser.

Published with GitHub Pages at <https://matheus-caldeira.github.io/cleanyourtv-ui-web/>.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page, in English; `data-i18n` marks what `app.js` turns into Portuguese |
| `styles.css` | Its look |
| `app.js` | The language switch and the `config.json` generator. Nothing leaves the browser except the city search (Open-Meteo) |
| `remotes.js` | Generated: every `examples/<model>/remote.json` from cleanyourtv-ui |
| `img/shots/` | Generated: the screenshots from cleanyourtv-ui's `docs/ui/screenshots/en/` |

## Keeping it current

When a new `remote.json` lands in cleanyourtv-ui, or the screenshots change:

```bash
scripts/sync.sh ../cleanyourtv-ui
```

To see it locally: `python3 -m http.server` in this folder, then <http://localhost:8000>. It also opens straight from
the file.

## Publishing

Settings → Pages → Deploy from a branch → `main`, folder `/` (root). No build step: the files are served as they are.

MIT, like CleanYourTV UI.
