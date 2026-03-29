# Himanshi Arora — Portfolio

Built with **Next.js 14** + custom CSS (no Tailwind classes used directly, just PostCSS setup).

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (free)

```bash
npm i -g vercel
vercel
```

Or drag-drop this folder to https://vercel.com/new

## Project Structure

```
himanshi-portfolio/
├── app/
│   ├── globals.css     ← all design tokens & styles
│   ├── layout.js       ← fonts, metadata
│   └── page.js         ← root page
├── components/
│   ├── Curtain.js      ← opening curtain animation
│   ├── Navbar.js       ← fixed nav + mobile menu
│   ├── Hero.js         ← hero section + cursor + typewriter
│   ├── About.js
│   ├── Skills.js       ← marquee + skill groups
│   ├── Projects.js
│   ├── Experience.js
│   ├── Life.js
│   ├── Contact.js
│   └── Footer.js
└── public/
    └── resume.pdf      ← your resume
```
