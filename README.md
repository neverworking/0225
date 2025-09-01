# My Best Gift is You — Romantic Birthday Microsite

A playful, romantic, glassmorphism-style site where the gift is *her*. Built with **Vite + React + TailwindCSS + Framer Motion** with a little **confetti**.

## ✨ Features
- Gift box landing with playful shake → click to unwrap
- Confetti burst and balloons reveal
- Glassmorphism cards with #38b6ff hover tint
- Sections: Why You're My Best Gift • Birthday Wishes *for her* • Snapshots of Us • Music • Virtual Hug
- Mobile-first, smooth animations (Framer Motion)

## 🧰 Tech
- React 18, Vite 5
- TailwindCSS 3
- Framer Motion 11
- canvas-confetti
- lucide-react icons

## ▶️ Run locally
```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

## 🚀 Deploy
- Create a GitHub repo and push this folder
- Import to **Vercel** (zero config) or **Netlify**

## 🎯 Personalize
- **Reasons list:** edit the `reasons` array in `src/App.jsx`
- **Wishes:** edit the `wishes` array in `src/App.jsx`
- **Photos:** drop images in `src/assets/` and update the `photos` array
- **Music:** change the `spotifyEmbed` URL in `src/components/MusicPlayer.jsx`
- **Theme color:** change `brand` in `tailwind.config.js` (default `#38b6ff`)

## 🧪 Triple-check
- No external images required; all placeholders included
- Handles no-photo scenario gracefully
- Confetti only fires once on open
- Fully responsive