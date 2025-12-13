# StratEdge - Professional Corporate Website

A modern, responsive corporate website built with **Astro**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **HeroNavBar Component** - Fixed navigation bar with full-screen hero section
- **PartnersAndAbout Section** - Dark partner banner + professional about section
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Fast Performance** - Optimized images and lazy loading
- **Professional Typography** - Serif + sans-serif font hierarchy

## 📋 Project Structure

```
src/
├── components/
│   ├── HeroNavBar.jsx        # Main hero section with navigation
│   ├── PartnersAndAbout.jsx  # Partners banner + about section
│   ├── Header.jsx            # Navigation header (optional)
│   ├── Footer.jsx            # Footer with links
│   └── Hero.jsx              # Hero component (optional)
├── pages/
│   ├── index.astro           # Homepage
│   └── about.astro           # About page
├── styles/
│   └── global.css            # Global Tailwind styles
└── env.d.ts
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```powershell
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Server runs at http://localhost:4321/

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📤 Pushing to GitHub

### Quick Setup (3 Steps)

**Step 1:** Initialize Git and commit
```powershell
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
git add .
git commit -m "Initial commit: StratEdge website"
```

**Step 2:** Create a repository on GitHub
- Go to https://github.com/new
- Enter name: `Leaddoctave1` (or your preference)
- Click "Create repository" (don't initialize with README)

**Step 3:** Push to GitHub
```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub details.

### Authentication
When prompted for a password:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select `repo` scope
4. Copy and use as password

**For detailed instructions, see:** [`QUICK_GITHUB_SETUP.md`](QUICK_GITHUB_SETUP.md)

## 🎨 Customization

### Update Logo
In `src/components/HeroNavBar.jsx`, change the logo text and styling.

### Replace Hero Image
Update the Unsplash URL in `HeroNavBar.jsx`:
```javascript
backgroundImage: `url('https://images.unsplash.com/your-image-url')`
```

### Customize Partner Logos
In `src/components/PartnersAndAbout.jsx`, update the `partnerLogos` array with your logos.

### Update Copy Text
Edit headlines and descriptions directly in the React components.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```powershell
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push to GitHub
2. Go to https://netlify.com
3. Connect your GitHub repository
4. Netlify automatically deploys on push

### Deploy to GitHub Pages
```powershell
npm run build
# Push the `dist/` folder to GitHub
```

## 📦 Dependencies

- **astro** (^5.16.5) - Static site generator
- **@astrojs/react** (^4.0.0) - React integration
- **react** & **react-dom** (^18.2.0) - UI library
- **tailwindcss** (^3) - Utility-first CSS framework
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixes

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run format` | Format code with Prettier |

## 🔧 Configuration Files

- `astro.config.mjs` - Astro configuration
- `tailwind.config.cjs` - Tailwind CSS configuration
- `postcss.config.cjs` - PostCSS configuration
- `.gitignore` - Files to exclude from Git

## 📚 Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Support

For questions or issues, please create a GitHub issue or contact the development team.

---

**Made with ❤️ using Astro, React, and Tailwind CSS**
