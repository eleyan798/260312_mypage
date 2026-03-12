# Photo Portfolio Website

A production-ready minimalist photography portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Static content files for project management (`src/content/projects/*.ts`)

## Runtime Requirement

- Minimum: Node.js >= 18.18.0
- Recommended: Node.js >= 20.19.0 (avoids `eslint-visitor-keys` engine warning during install)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/page.tsx`: Home / work index
- `src/app/projects/[slug]/page.tsx`: Project detail page
- `src/app/about/page.tsx`: About page
- `src/app/cv/page.tsx`: CV page
- `src/app/contact/page.tsx`: Contact page
- `src/app/blog/page.tsx`: Optional blog page
- `src/content/projects/*.ts`: One file per photography project
- `public/images/projects/*`: Project image assets

## How to Add a New Project

1. Create a new file in `src/content/projects/`, e.g. `my-new-project.ts`.
2. Export a `Project` object following the existing type definition in `src/types/project.ts`.
3. Import and append it in `src/content/projects/index.ts`.
4. Place images under `public/images/projects/<project-slug>/` and reference them in the content file.

## SEO Notes

- Site-level metadata is defined in `src/app/layout.tsx`.
- Project-level metadata is generated in `src/app/projects/[slug]/page.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are included.

## Before Production

1. Update `src/content/site.ts`:
   - `artistName`
   - `url` (your real domain)
   - `email`
   - `instagram`
2. Replace placeholder images under `public/images/projects/` with your own photographs.
3. Optionally revise text content for About/CV/Contact/Blog.

## Deploy to Vercel

### Option A: GitHub + Vercel (recommended)

1. Push repository to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your repo.
3. Framework preset: Next.js (auto-detected).
4. If your repository root is `C:\Users\Lenovo\Documents\Playground`, set **Root Directory** to `photo-portfolio` in Vercel project settings.
5. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Quality Check

```bash
npm run lint
npm run build
npm audit --omit=dev
```

If all pass, the site is ready for production deployment.