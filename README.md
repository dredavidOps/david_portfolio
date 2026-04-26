# NOC Portfolio — David Yaotse

> A Network Operations Center (NOC) themed developer portfolio built with React, Vite, and Tailwind CSS. Designed to look like a systems monitoring dashboard — because infrastructure engineers deserve infrastructure-themed portfolios.

**[🌐 Live Site](https://your-vercel-url.vercel.app)** · **[📄 CV Download](https://your-vercel-url.vercel.app/cv.pdf)**

---

## ✨ Features

- **NOC Dashboard Aesthetic** — Dark-themed interface inspired by network operations centers with system status indicators, terminal-style typography, and severity-coded experience cards
- **Interactive Components** — Live system clock, animated status LEDs, smooth scroll navigation, mobile-responsive sidebar
- **Modular Content Sections** — Hero dashboard, experience timeline (severity-coded), skills metrics, project runbooks, certification registry, and contact alert console
- **Built for Performance** — Vite-powered fast builds, optimized assets, Tailwind CSS for minimal bundle size
- **Easy Content Updates** — All portfolio data lives in structured JavaScript arrays — no CMS needed

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [React 18](https://react.dev) |
| Build Tool | [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| Deployment | [Vercel](https://vercel.com) / [Netlify](https://netlify.com) |

---

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Clone the repository (private — requires access)
git clone git@github.com:dredavidOps/david_portfolio.git
cd david_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
├── public/
│   └── vite.svg                 # Favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Fixed top bar with system clock & status
│   │   ├── Sidebar.jsx          # Navigation panel with mobile menu
│   │   ├── Hero.jsx             # Dashboard-style hero section
│   │   ├── About.jsx            # Personnel profile / bio
│   │   ├── Experience.jsx       # Work history (severity-coded cards)
│   │   ├── Projects.jsx         # Project runbooks
│   │   ├── Skills.jsx           # Technical metrics + certifications
│   │   ├── Contact.jsx          # Contact form + social links
│   │   └── Footer.jsx           # System status footer
│   ├── hooks/
│   │   └── useClock.js          # Live UTC clock hook
│   ├── App.jsx                  # Main layout composition
│   ├── index.css                # Tailwind directives + custom styles
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration (base: './')
├── tailwind.config.js           # Theme colors, fonts, animations
├── postcss.config.js            # PostCSS + Tailwind + Autoprefixer
└── package.json
```

---

## 🎨 Updating Content

All portfolio content is stored as plain data arrays in the component files. Edit directly, save, commit, and push to redeploy.

### Update Experience

Edit `src/components/Experience.jsx`:

```javascript
const experiences = [
  {
    id: 'your-company',
    severity: 'CRITICAL', // CRITICAL | WARNING | INFO | LOW
    icon: Zap,            // Any lucide-react icon
    title: 'Company · Role',
    date: '[2024-01-01 → PRESENT]',
    points: [
      'Your <span class="text-noc-textBright">highlighted</span> achievement',
      'Another accomplishment',
    ],
    tags: ['#tag1', '#tag2'],
  },
  // ...add more
]
```

### Update Projects

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 'project-name',
    runbook: 'RUNBOOK_003',
    title: 'Project Title',
    problem: 'What problem did you solve?',
    diagnostic: 'How did you approach it?',
    resolution: 'What was the outcome?',
    tags: ['React', 'Node.js'],
    links: { live: 'https://...', repo: 'https://github.com/...' },
  },
]
```

### Update Skills & Certifications

Edit `src/components/Skills.jsx`:

```javascript
const skillMetrics = [
  { name: 'Your Skill', value: 90, color: 'from-noc-cyan to-noc-blue' },
]

const certifications = [
  { name: 'Your Cert', year: '2024' },
]
```

### Update Contact Info

Edit `src/components/Contact.jsx` — change email, LinkedIn, and GitHub URLs.

### Update Colors

All NOC theme colors are defined in `tailwind.config.js`:

```javascript
colors: {
  noc: {
    bg: '#0a0e1a',
    panel: '#111827',
    border: '#1f2937',
    text: '#94a3b8',
    textBright: '#e2e8f0',
    red: '#ef4444',
    green: '#22c55e',
    blue: '#3b82f6',
    cyan: '#06b6d4',
    // ...
  }
}
```

---

## 🌐 Deployment

This project is configured for static hosting.

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Vite preset is auto-detected → Click **Deploy**
4. Every future `git push` auto-deploys

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → Import from GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📸 Screenshots

| Hero Dashboard | Experience Timeline | Skills & Certs |
|:--:|:--:|:--:|
| ![Hero](screenshots/hero.png) | ![Experience](screenshots/experience.png) | ![Skills](screenshots/skills.png) |

> Add your own screenshots to a `screenshots/` folder and update the paths above.

---

## 👤 About

**David Yaotse** — Systems Engineer based in Berlin

- 🌐 Portfolio: [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/davidyaotse](https://linkedin.com/in/davidyaotse)
- 🐙 GitHub: [@dredavidOps](https://github.com/dredavidOps)
- 📧 Email: [david.yaotse1@gmail.com](mailto:david.yaotse1@gmail.com)

---

> *"I eliminate recurring problems — not manage them eternally."*
