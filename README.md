# Uma Tailoring – React Application

A React + Vite application for Uma Tailoring, Eraniel, Nagercoil.

## Project Structure

```
frontend/
├── public/
│   └── images/          # All website images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx   # Fixed navigation bar with mobile menu
│   │   ├── Footer.jsx   # Site footer
│   │   └── PageHero.jsx # Reusable page hero banner
│   ├── pages/
│   │   ├── Home.jsx     # Home page
│   │   ├── About.jsx    # About Us page
│   │   ├── Gallery.jsx  # Gallery with filter
│   │   └── Contact.jsx  # Contact & booking form
│   ├── styles/
│   │   └── global.css   # All global styles
│   ├── App.jsx          # Router setup
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack
- React 18
- React Router DOM v6
- Vite 5
- CSS Variables (no CSS framework)
