# Neon 3D Developer Portfolio

A responsive, neon-green developer portfolio built with React + Vite, with a custom animated particle network, portrait hero, project cards, and mobile navigation.

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the project folder in a terminal.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Deploy to Vercel
1. Upload this project to a GitHub repository.
2. In Vercel, select **Add New → Project** and import that repository.
3. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
4. Click **Deploy**.

## Personalize before publishing
- Replace `your.email@example.com` in `src/main.jsx` with your real email address.
- Update GitHub and LinkedIn links in the footer to your own profiles.
- Review the project descriptions and technology lists so they accurately reflect what you have built.
- The portrait is stored at `public/images/profile.png`; replace it anytime with a new image using the same filename.

## Notes
- The current project entries are portfolio-ready starter descriptions. Keep only tools and features you have actually used.
- Three.js and React Three Fiber dependencies are included for future 3D scene enhancements. The current hero uses a lightweight animated canvas particle network for smooth performance.
