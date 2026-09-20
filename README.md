# Susan & Skage

React 19 + Vite 8, statisk build, publisert på GitHub Pages.

<p align="center">
  <img src=".github/media/desktop.jpg" height="340" alt="Toppen av siden på desktop" />
  <img src=".github/media/mobile.jpg" height="340" alt="Toppen av siden på mobil" />
</p>

## Kom i gang

```bash
npm install
npm run dev
```

Siden kjører på <http://localhost:5173>.


## Struktur

```
src/
  App.jsx        rekkefølgen på seksjonene
  config.js      alt innhold
  index.css      tokens + reset + basetypografi
  components/    én komponent per seksjon, pluss himmelprimitivene
  lib/           kameraet (parallax), kartvalg, reduced-motion
  styles/        base, sky, hero, sections
```


## Publisering

`.github/workflows/deploy.yml` bygger og publiserer til GitHub Pages ved push
til `main`. Første gang må **Settings → Pages → Source** stå på **GitHub
Actions**.

Siden bor på <https://skagesogsusans2027.com>. Domenet settes av
[`public/CNAME`](public/CNAME), som Vite kopierer til `dist/`, og derfor er
`base` i `vite.config.js` `'/'`. Bytter du domene, må `public/CNAME` og
`canonical` / `og:url` / `og:image` i `index.html` følge med.

DNS hos registraren må peke på GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
CNAME www t3lluz.github.io.
```

Når DNS har propagert, huk av **Enforce HTTPS** under Settings → Pages.

---

Flyet og fargene er en hyllest til Porco Rosso (Studio Ghibli,
1992).
