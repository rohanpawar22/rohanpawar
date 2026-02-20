# Rohan Pawar - Senior Frontend Developer Portfolio

A modern, production-ready Angular portfolio website showcasing professional experience, skills, and projects. Built with Angular 21+, TypeScript, and Angular Material.

![Angular](https://img.shields.io/badge/Angular-21-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Professional & Modern Design
- **Clean, minimal UI** with a premium, professional look
- **Smooth animations** and micro-interactions for enhanced UX
- **Fully responsive** across all devices (mobile, tablet, desktop, large screens)
- **Accessibility-friendly** with ARIA roles and proper contrast ratios
- **SEO-optimized** with meta tags and semantic HTML

### Technical Excellence
- **Standalone Components** architecture (Angular 21+)
- **Angular Signals** for reactive state management
- **Light & Dark Mode** with smooth transitions and localStorage persistence
- **Lazy Loading** for optimal performance
- **Type-safe** with full TypeScript coverage
- **Clean Architecture** with organized folder structure

### Portfolio Sections
1. **Hero Section** - Professional introduction with CTA buttons
2. **About Me** - Professional summary with key metrics
3. **Skills** - Categorized technical skills with progress indicators
4. **Experience** - Timeline-based professional journey
5. **Projects** - Featured work with detailed modals
6. **Passion** - Personal interests (motorbike riding & content creation)
7. **Contact** - Contact form and social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rohan-portfolio.git
   cd rohan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on http://localhost:4200 |
| `npm run build` | Build for production in `dist/` folder |
| `npm run watch` | Build with file watching enabled |
| `npm test` | Run unit tests via Vitest |

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       ├── theme.service.ts        # Light/Dark theme management
│   │       └── scroll.service.ts       # Smooth scrolling functionality
│   ├── features/
│   │   └── sections/
│   │       ├── hero/                   # Hero section component
│   │       ├── about/                  # About section component
│   │       ├── skills/                 # Skills section component
│   │       ├── experience/             # Experience section component
│   │       ├── projects/               # Projects section component
│   │       ├── passion/                # Passion section component
│   │       └── contact/                # Contact section component
│   ├── shared/
│   │   └── components/
│   │       ├── header/                 # Header with navigation
│   │       └── footer/                 # Footer component
│   ├── app.ts                          # Root component
│   ├── app.config.ts                   # App configuration
│   └── app.routes.ts                   # Routing configuration
├── styles.scss                         # Global styles & theme system
└── index.html                          # Main HTML with SEO meta tags
```

## 🎨 Theme System

### How It Works
The portfolio includes a sophisticated light/dark theme system with:
- **Theme Service** using Angular Signals for reactivity
- **CSS Variables** for seamless theme transitions
- **localStorage** persistence across sessions
- **System Preference** detection as fallback

### Theme Toggle
Users can toggle themes via the sun/moon icon in the header. The preference is automatically saved and restored on subsequent visits.

### Customization
To customize the theme colors, edit the CSS variables in `src/styles.scss`:

```scss
:root {
  --primary-color: #6366f1;           // Your brand color
  --primary-gradient: linear-gradient(...);
  // ... more variables
}
```

## 📝 Content Customization

### Personal Information
Update the content in each section component:

1. **Hero Section** (`src/app/features/sections/hero/hero.component.ts`)
   ```typescript
   readonly name = 'Your Name';
   readonly title = 'Your Title';
   readonly experience = 'X+ Years';
   ```

2. **About Section** (`src/app/features/sections/about/about.component.ts`)
   - Update `aboutText`, `expertise`, and `highlights`

3. **Skills Section** (`src/app/features/sections/skills/skills.component.ts`)
   - Modify `skillCategories` array

4. **Experience Section** (`src/app/features/sections/experience/experience.component.ts`)
   - Update `experiences` array with your work history

5. **Projects Section** (`src/app/features/sections/projects/projects.component.ts`)
   - Add your projects to `projects` array

6. **Contact Section** (`src/app/features/sections/contact/contact.component.ts`)
   - Update email and social links

### Social Links
Update social media links in:
- **Footer** (`src/app/shared/components/footer/footer.component.ts`)
- **Passion Section** (`src/app/features/sections/passion/passion.component.ts`)
- **Contact Section** (`src/app/features/sections/contact/contact.component.ts`)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/rohan-portfolio/browser`

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### GitHub Pages
```bash
ng build --base-href "/your-repo-name/"
npx angular-cli-ghpages --dir=dist/rohan-portfolio/browser
```

## 🔧 Configuration

### Update Meta Tags
Edit `src/index.html` to customize:
- Page title
- Meta descriptions
- Open Graph tags
- Twitter cards
- Structured data

### Update Favicon
Replace `public/favicon.ico` with your own favicon.

### Resume Download
Place your resume PDF in `public/assets/resume.pdf` for the download button to work.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: 968px - 1400px
- **Large Desktop**: > 1400px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)

## 🎯 Performance

- **Lazy Loading** for sections
- **Optimized Images** (use WebP format when possible)
- **Tree-shaking** enabled for smaller bundle sizes
- **CSS optimizations** with minimal animations
- **Lighthouse Score**: 95+ expected

## 🐛 Known Issues

- Contact form is a placeholder (implement backend integration as needed)
- Resume download requires `public/assets/resume.pdf` file

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.dev)
- Icons from [Material Icons](https://fonts.google.com/icons)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📧 Contact

For questions or suggestions, reach out via:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourusername)
- GitHub: [Your Profile](https://github.com/yourusername)

---

**Built with ❤️ using Angular 21**
