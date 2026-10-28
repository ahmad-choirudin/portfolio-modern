# Ahmad Choirudin — Portfolio

Personal portfolio of Ahmad Choirudin, an independent digital professional from Indonesia working across Web3, frontend development, community operations, and AI data.

**Live site:** https://www.ahmadchoirudin.my.id/

## Features

- Dark theme with neon green accent, fully responsive
- Sections: Hero, Selected Work, About, Expertise, Credentials, Contact
- Entrance animations: line-by-line hero headline, drawn signature line, hero photo parallax
- Scroll progress bar, cursor glow, and tilting project cards (desktop only)
- Respects `prefers-reduced-motion`
- All content lives in simple data files, no code changes needed to update text

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react (icons)

## Getting Started

```bash
cd app/frontend
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
app/frontend/
├── public/               # Photos, project images, favicon
└── src/
    ├── components/site/  # Hero, SelectWork, Expertise, Contact, etc.
    ├── data/             # All editable content
    ├── pages/Index.tsx   # Page layout
    └── index.css         # Global styles and animations
```

## Editing Content

| What to change              | File                          |
| --------------------------- | ----------------------------- |
| Name, email, social links   | `src/data/site.ts`            |
| Hero and About photos       | `src/data/site.ts` + `public/`|
| Projects                    | `src/data/projects.ts`        |
| Expertise                   | `src/data/expertise.ts`       |
| Certificates                | `src/data/certificate.ts`     |
| Colors                      | `tailwind.config.ts`          |
| Animations                  | `src/index.css`               |

## Deployment

Deployed on Vercel. When importing the repo, set **Root Directory** to `app/frontend`. Every push to `main` redeploys automatically.

## Contact

- Email: ahmadchoirudin86@gmail.com
- GitHub: [@ahmad-choirudin](https://github.com/ahmad-choirudin)
- X: [@CubbieOG](https://x.com/CubbieOG)
