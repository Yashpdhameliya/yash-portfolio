# Yash Dhameliya — Portfolio

Personal portfolio of Yash Dhameliya, Team Lead & Full-Stack Developer (Next.js · Nest.js · MySQL · Flutter), based in Surat, India.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Motion · next-themes · lucide-react. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Editing content

Everything shown on the site lives in one file: `src/data/profile.ts` — name, summary, stats, experience, projects, skills, education, social links. Components only render what they find there.

- **Resume:** replace `public/resume/Yash_Dhameliya_Resume.pdf` (same filename keeps the download link working).
- **Photo:** `public/images/profile.webp` (4:5 portrait) and `public/images/avatar.webp` (square). Regenerate from an original with
  `node scripts/crop-profile.mjs <original.jpg> [left] [top] [width]`.
- **Project screenshots:** `public/images/projects/<slug>.webp` (1200×750). Re-capture live sites with
  `node scripts/capture-screenshots.mjs [slug ...]` (uses the locally installed Chrome). A project with `image: null` in `profile.ts` shows a designed cover instead.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` (used for canonical URL, Open Graph, sitemap, JSON-LD). Defaults to `https://yash-dhameliya.vercel.app`.

## Structure

```
src/app/            layout, page, globals.css, metadata routes (icon, opengraph-image, robots, sitemap)
src/data/profile.ts all content
src/components/
  layout/           Navbar, Footer, ThemeProvider, ThemeToggle
  sections/         Hero, Stats, About, Experience, Projects, Skills, Education, Contact
  ui/               Section, Reveal, Counter, Marquee, Chip, Button, Magnetic, CopyEmail, LocalTime, SocialIcon
scripts/            crop-profile.mjs, capture-screenshots.mjs
```

## Deploy

Push to `main` on GitHub; Vercel builds and deploys automatically. No environment variables are required.
