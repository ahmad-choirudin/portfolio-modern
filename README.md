# ◈ Ahmad Choirudin — Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/PORTFOLIO-AHMAD_CHOIRUDIN-C4F56A?style=for-the-badge&labelColor=0A0A0A" alt="Portfolio" />
  <img src="https://img.shields.io/badge/STATUS-LIVE-C4F56A?style=for-the-badge&labelColor=0A0A0A" alt="Live" />
  <img src="https://img.shields.io/badge/BUILT_WITH-REACT_+_TYPESCRIPT-61DAFB?style=for-the-badge&labelColor=0A0A0A" alt="React and TypeScript" />
</p>

<p align="center">
  <strong>Independent digital professional from Indonesia.</strong>
  <br />
  Working across Web3, frontend development, community operations, and AI data.
</p>

<p align="center">
  <a href="https://www.ahmadchoirudin.my.id/"><strong>↗ OPEN LIVE SITE</strong></a>
  &nbsp; · &nbsp;
  <a href="https://github.com/ahmad-choirudin"><strong>GITHUB PROFILE</strong></a>
</p>

---

## ◈ FEATURES

<table>
  <tr>
    <td width="50%">
      <strong>01 / DESIGN</strong><br />
      Dark theme with a neon green accent, fully responsive.
    </td>
    <td width="50%">
      <strong>02 / SECTIONS</strong><br />
      Hero, Selected Work, About, Expertise, Credentials, and Contact.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <strong>03 / ENTRANCE ANIMATIONS</strong><br />
      Line-by-line hero headline, drawn signature line, and hero photo parallax.
    </td>
    <td width="50%">
      <strong>04 / INTERACTIONS</strong><br />
      Scroll progress bar, cursor glow, and tilting project cards (desktop only).
    </td>
  </tr>
  <tr>
    <td width="50%">
      <strong>05 / ACCESSIBILITY</strong><br />
      Respects <code>prefers-reduced-motion</code>.
    </td>
    <td width="50%">
      <strong>06 / EASY TO EDIT</strong><br />
      All content lives in simple data files, so updating text never requires touching components.
    </td>
  </tr>
</table>

<!--
## ◈ PREVIEW

<p align="center">
  <img src="docs/preview.jpg" alt="Portfolio preview" width="100%" />
</p>
-->

## ◈ TECH STACK

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/lucide--react-20232A?style=flat-square" alt="lucide-react" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## ◈ GETTING STARTED

Requires Node.js 18 or newer.

```bash
git clone https://github.com/ahmad-choirudin/portfolio-modern.git
cd portfolio-modern/app/frontend
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

## ◈ PROJECT STRUCTURE

```text
app/frontend/
├── public/               # Photos, project images, favicon
└── src/
    ├── components/site/  # Hero, SelectWork, Expertise, Contact, etc.
    ├── data/             # All editable content
    ├── pages/Index.tsx   # Page layout
    └── index.css         # Global styles and animations
```

## ◈ EDITING CONTENT

| What to change | File |
| --- | --- |
| Name, email, social links | `src/data/site.ts` |
| Hero and About photos | `src/data/site.ts` + `public/` |
| Projects | `src/data/projects.ts` |
| Expertise | `src/data/expertise.ts` |
| Certificates | `src/data/certificate.ts` |
| Colors | `tailwind.config.ts` |
| Animations | `src/index.css` |

## ◈ DEPLOYMENT

Deployed on Vercel. When importing the repo, set **Root Directory** to `app/frontend`. Every push to `main` redeploys automatically.

## ◈ CONTACT

<p align="center">
  <a href="https://www.ahmadchoirudin.my.id/">Portfolio</a>
  &nbsp; · &nbsp;
  <a href="mailto:ahmadchoirudin86@gmail.com">Email</a>
  &nbsp; · &nbsp;
  <a href="https://github.com/ahmad-choirudin">GitHub</a>
  &nbsp; · &nbsp;
  <a href="https://x.com/CubbieOG">X / @CubbieOG</a>
</p>
