# Syed Hamza Arees — Portfolio

A Next.js 14 + TypeScript + Tailwind CSS portfolio: dark theme, glassmorphism,
aurora background, and an animated terminal, built from your actual resume
content.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — 3 things to finish

1. **GitHub link.** Open `src/data/portfolio.ts` and replace
   `github: "https://github.com/YOUR_GITHUB_USERNAME"` with your real profile
   URL. It's used in the Hero social icons and the Contact section.

2. **Contact form.** The form in `src/components/Contact.tsx` currently only
   shows a "Sent" state locally — it doesn't send anything yet. Easiest way
   to wire it up with [EmailJS](https://www.emailjs.com) (free tier is fine):
   - Create an EmailJS account, an email service, and a template.
   - `npm install @emailjs/browser`
   - In `handleSubmit`, call
     `emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)`
     instead of just setting state.
   - Put the three IDs in `.env.local` as `NEXT_PUBLIC_EMAILJS_*` variables.

3. **Domain.** `src/app/layout.tsx`, `sitemap.ts` and `robots.ts` all
   reference `https://hamzaarees.dev` as a placeholder domain — swap it for
   your real domain once you have one (or your `.vercel.app` URL).

## Project structure

```
src/
  app/
    layout.tsx      — fonts, metadata, global background layers
    page.tsx         — assembles all sections
    globals.css       — design tokens, glass/button utilities
    sitemap.ts / robots.ts / not-found.tsx
  components/
    Navbar, Hero, About, Skills, Experience,
    Projects, Certifications, Contact, Footer,
    Terminal, ScrollProgress, CursorGlow
  data/
    portfolio.ts     — all real content lives here (resume-derived)
public/
  profile.jpg
  resume.pdf
```

To change any text on the site (job history, project descriptions, skills),
edit `src/data/portfolio.ts` — nothing else needs to change.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Deploy. You'll get a `*.vercel.app` URL immediately; add a custom domain
   under Project Settings → Domains whenever you're ready.

## Notes on what's included vs. not

Included and working: responsive layout, dark theme, aurora/grid background,
glassmorphism cards, animated terminal, typing role animation, scroll
progress bar, cursor glow (desktop only), scroll-reveal animations on every
section, custom 404, sitemap.xml, robots.txt, Open Graph/Twitter metadata,
`prefers-reduced-motion` support.

Not included (noted above, and straightforward to add): live GitHub stats/
contribution graph (needs the GitHub API + your username), working email
delivery on the contact form (needs EmailJS or similar), light mode toggle,
command palette. Flagging these rather than shipping fake versions that look
functional but aren't.
