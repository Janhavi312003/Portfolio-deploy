# Janhavi Sonurkar — Portfolio

Personal portfolio for **Janhavi Sonurkar**, Full Stack & Blockchain Developer. Built to showcase projects, experience, and skills for Full Stack / Web3 roles.

**Live site:** [https://portfolio-tau-eight-23.vercel.app](https://portfolio-tau-eight-23.vercel.app)

## Tech stack

- [Next.js](https://nextjs.org) 15 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev) icons
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
# Install dependencies
npm install

# Copy env example and fill in your Web3Forms key
cp .env.example .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start local dev server   |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project structure

- `app/` — App Router pages (`/`, `/projects/[slug]`)
- `components/` — UI sections (Hero, About, Skills, Experience, Projects, Contact, Footer)
- `utils/data/` — Editable content (personal data, projects, skills, experience)
- `public/` — Static assets (photos, resume PDF, skill icons)

## Notes

- Replace `public/about-photo.jpg` and `public/hero-photo.jpg` with your real portraits if needed.
- Set `email` in `utils/data/personal-data.js` to your real address.
- Replace the AgriChain GitHub placeholder in `utils/data/projects.js` with the real repo URL.
- Contact form uses [Web3Forms](https://web3forms.com) — set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`.

## License

Private portfolio project.
