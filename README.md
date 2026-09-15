# Luciana Reyes — Portfolio

Personal portfolio site for [Luciana Reyes](https://github.com/lulireyes), Product Designer in Berlin.

**https://lulireyes.github.io/my-portfolio/**

## Develop

```bash
npm install
npm run dev
```

## Content (Markdown CMS)

### Homepage

Edit [`src/content/site.json`](src/content/site.json):

- `name`, `role`, `location`, `tagline`, `about`
- `seo.title` / `seo.description`
- `links` (LinkedIn, Medium, …)
- `footer`

### Case studies

1. Add images under `public/img/projects/<slug>/`
2. Create `src/content/projects/<slug>.md`:

```md
---
title: Project name
subtitle: One-line summary
year: 2026
order: 1
draft: false
cover: /img/projects/my-project/cover.webp
---

## Overview

Write the case study in Markdown.

![Detail](/img/projects/my-project/detail.webp)
```

Frontmatter:

| Field | Meaning |
| --- | --- |
| `draft` | `true` hides the project (default) |
| `order` | Lower numbers appear first |
| `cover` | Path under `public/` |
| `externalUrl` | Optional; card links out (Behance/Medium) instead of a case study page |

There is a draft template at `src/content/projects/example-case-study.md`. Set `draft: false` to publish it.

## Build

```bash
npm run build
npm run preview
```
