# Ally Stauffer — Portfolio

A personal portfolio built with Astro and Tailwind CSS. The site highlights Ally's software engineering experience, selected projects, education, and technical skills.

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Customize the site

Update [`src/config.ts`](./src/config.ts) to change the portfolio content and styling:

- Personal details, page title, and accent color
- Optional email and social links
- About section and skills
- Projects, including impact-focused bullets, links, and technologies
- Experience entries, dates, and achievement bullets
- Education entries, with GPA displayed separately from achievements
- Education coursework, activities, and school highlights grouped by category

The page sections are implemented as independent Astro components in `src/components/` and assembled in `src/pages/index.astro`. A section is hidden when its corresponding list in the configuration is empty.

Education entries can include `coursework`, `activities`, and `highlights` arrays. Each groups information under a category heading; for example, coursework can be grouped into software, data, and mathematics, while activities can be grouped into academic and campus organizations. Use the `gpa` field for GPA so it appears as a separate credential rather than an achievement bullet.

## Tech stack

- [Astro](https://astro.build/) for static site generation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- TypeScript for site configuration
- IBM Plex Mono, loaded from Google Fonts

## Deployment

The site is configured for GitHub Pages at `https://allysonstauffer.github.io/portfolio/`. Build and publish the generated `dist/` directory with:

```bash
npm run build
npm run deploy
```

The deploy command uses `gh-pages` to publish the `dist/` directory.
