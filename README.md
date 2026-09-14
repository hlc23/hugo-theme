# Root — a Hugo theme for write-ups and slide decks

A dark-first, bilingual Hugo theme built for a personal blog that mixes
long-form security / CTF write-ups with native [Reveal.js](https://revealjs.com)
slide decks — no second theme needed. Single column, Tailwind CSS, no
client-side framework beyond Reveal itself.

## Features

- Dark mode by default, with a no-flash theme toggle persisted in `localStorage`
- Built-in multilingual support (language switcher in the header, `i18n/en.toml` + `i18n/zh-tw.toml` included)
- Avatar + nav header, unified homepage feed that lists every top-level content section (posts, slides, …)
- Native Reveal.js slide decks (`type: "reveal"`) — see below
- Shortcodes made for write-ups: `alert`, `spoiler` (Discord-style flag hider), `columns`/`column`, `figure`
- Table of contents, reading time, tags/categories
- Giscus or Disqus comments, Google Analytics, RSS
- Tailwind CSS with a single `--accent` CSS variable for re-theming

## Installation

As a git submodule (classic Hugo theme style):

```sh
git submodule add https://github.com/hlc23/hugo-theme.git themes/hugo-theme
```

In your site's `hugo.toml`:

```toml
theme = ["hugo-theme"]
```

Then run `npm install` at your site root and add `config/postcss.config.js` /
`config/tailwind.config.js` that point at this theme's Tailwind setup (copy
the ones under `exampleSite/config/` as a starting point) — Hugo resolves
PostCSS config paths relative to your site root, not the theme.

## Slide decks (Reveal.js)

Give a regular content page `type: "reveal"` in its front matter and it
renders as a full-screen [Reveal.js](https://revealjs.com) deck — its own
`<html>`, no Root header/footer/Tailwind — instead of a normal article.
Reveal's JS/CSS load from a CDN, so there's nothing to `npm install`.

Slides are just markdown, separated by a thematic break (`---` on its own
line):

```md
---
title: "My Deck"
type: "reveal"
revealjs:
  theme: "black"      # any Reveal.js theme name
  transition: "slide"
---

# First slide

---

## Second slide

- Regular markdown, shortcodes, and syntax-highlighted code fences all work,
  because slides go through Hugo's normal render pipeline — the deck only
  splits the *already-rendered* HTML on `<hr>`. Nothing bypasses chroma or
  image processing the way client-side markdown parsing would.
```

Two extra shortcodes exist for deck content:

```md
{{</* fragment */>}}revealed one click at a time{{</* /fragment */>}}

{{</* notes */>}}only visible in Reveal's speaker view (press `S`){{</* /notes */>}}
```

Available `revealjs` front-matter keys: `theme`, `transition`, `background`
(CSS value, sets `.reveal`'s background), `hash`, `controls`, `progress`,
`center` (all four default to `true`). `site.Params.revealjsVersion`
overrides the pinned Reveal.js version (default `5.1.0`) sitewide.

This covers a single flat deck; it does not (yet) replicate
[reveal-hugo](https://github.com/dzello/reveal-hugo)'s chaptered decks,
per-slide backgrounds, or PDF export. For those, add reveal-hugo as a
second theme instead of using `type: "reveal"`:

```toml
theme = ["hugo-theme", "reveal-hugo"]
```

## Params

```toml
[params]
  description = "Site meta description"
  avatar = "img/avatar.jpg"      # resolved from assets/
  favicon = "icons/favicon.ico"  # resolved from static/ or assets/
  bio = "One-line tagline under the site title"
  accentColor = "#10b981"        # any CSS color; overrides the default emerald
  googleFont = "Huninn"          # any Google Fonts family name; false disables loading one
  numberOfItemsOnHomePage = 5

  [params.giscus]
    enable = false
    repo = ""
    repoId = ""
    category = "Announcements"
    categoryId = ""
```

`services.googleAnalytics.id` (Hugo's built-in `[services.googleAnalytics]`)
enables analytics automatically.

## Shortcodes

````md
{{</* alert "warning" "Optional title" */>}}
Body, supports **markdown**.
{{</* /alert */>}}

Flag: {{</* spoiler */>}}flag{demo}{{</* /spoiler */>}}

{{</* columns */>}}
{{</* column width="1" */>}}Left{{</* /column */>}}
{{</* column width="2" */>}}Right, twice as wide{{</* /column */>}}
{{</* /columns */>}}
````

`alert` severities: `info`, `warning`, `error`, `success`.

## Local development

Requires Node.js 22+ (Hugo's PostCSS pipeline shells out to Node with the
`--permission` flag, which older Node 20.x builds reject as an unknown
option).

```sh
cd exampleSite
npm install
npm run dev     # hugo server --themesDir ../..
```

`--themesDir ../..` assumes this repository is checked out into a directory
named `hugo-theme` (as it is on GitHub) — Hugo looks two levels up from
`exampleSite/` for a theme folder with that name.

## License

MIT, see [LICENSE](LICENSE).
