# Root — a Hugo theme for write-ups and slide decks

A dark-first, bilingual Hugo theme built for a personal blog that mixes
long-form security / CTF write-ups with [Reveal.js](https://revealjs.com)
slide decks (via [reveal-hugo](https://github.com/dzello/reveal-hugo)).
Single column, Tailwind CSS, no client-side framework.

## Features

- Dark mode by default, with a no-flash theme toggle persisted in `localStorage`
- Built-in multilingual support (language switcher in the header, `i18n/en.toml` + `i18n/zh-tw.toml` included)
- Avatar + nav header, unified homepage feed that lists every top-level content section (posts, slides, …)
- Shortcodes made for write-ups: `alert`, `spoiler` (Discord-style flag hider), `columns`/`column`, `figure`
- Table of contents, reading time, tags/categories
- Giscus or Disqus comments, Google Analytics, RSS
- Tailwind CSS with a single `--accent` CSS variable for re-theming
- Designed to sit alongside a second theme (e.g. `reveal-hugo`) for slide decks — see below

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

## Combining with reveal-hugo

The blog this theme was extracted from keeps slide decks in their own
`content/slides/` section and renders them with `reveal-hugo` as a **second**
theme:

```toml
theme = ["hugo-theme", "reveal-hugo"]
```

`reveal-hugo` decks set `outputs = ["Reveal"]` in front matter and use their
own `baseof.reveal.html`, so they never touch Root's `baseof.html`. Root only
needs to know the section exists to list it on the homepage and in
`/slides/` — see `layouts/index.html`, which lists every top-level section
generically (using `.RegularPages`, falling back to `.Sections` for a section
whose children are themselves decks).

## Params

```toml
[params]
  description = "Site meta description"
  avatar = "img/avatar.jpg"      # resolved from assets/
  favicon = "icons/favicon.ico"  # resolved from static/ or assets/
  bio = "One-line tagline under the site title"
  accentColor = "#10b981"        # any CSS color; overrides the default emerald
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
