# Quick Start Guide

Welcome to your new Angular portfolio! Follow these steps to customize it for your needs.

## 🚀 Getting Started

### 1. Run the Project
```bash
npm install
npm start
```
Open http://localhost:4200 in your browser.

### 2. Test Theme Switching
Click the sun/moon icon in the header to toggle between light and dark modes.

## ✏️ Customization Checklist

### Personal Information
- [ ] Update name in `src/app/features/sections/hero/hero.component.ts`
- [ ] Update title and tagline in hero component
- [ ] Update about text in `src/app/features/sections/about/about.component.ts`
- [ ] Update email in `src/app/features/sections/contact/contact.component.ts`

### Social Links
Update all instances in:
- [ ] `src/app/shared/components/footer/footer.component.ts`
- [ ] `src/app/features/sections/passion/passion.component.ts`
- [ ] `src/app/features/sections/contact/contact.component.ts`

### Skills
- [ ] Edit skill categories in `src/app/features/sections/skills/skills.component.ts`
- [ ] Adjust skill proficiency levels

### Experience
- [ ] Add your work experience in `src/app/features/sections/experience/experience.component.ts`
- [ ] Update roles, companies, dates, and responsibilities

### Projects
- [ ] Add your projects in `src/app/features/sections/projects/projects.component.ts`
- [ ] Include descriptions, technologies, and achievements

### Passion/Content Creation
- [ ] Update YouTube channel link in `src/app/features/sections/passion/passion.component.ts`
- [ ] Update Instagram profile link
- [ ] Customize the passion section text

### SEO & Meta Tags
- [ ] Update page title in `src/index.html`
- [ ] Update meta descriptions
- [ ] Update Open Graph tags
- [ ] Update Twitter card tags
- [ ] Update structured data (JSON-LD)

### Branding
- [ ] Replace favicon at `public/favicon.ico`
- [ ] Update logo initials in header (default: "RP")
- [ ] Add your resume PDF to `public/assets/resume.pdf`

### Theme Colors (Optional)
- [ ] Customize CSS variables in `src/styles.scss`
- [ ] Adjust primary colors and gradients

## 🎨 Theme Customization

To change the primary color scheme, edit `src/styles.scss`:

```scss
:root {
  --primary-color: #your-color;
  --primary-gradient: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

## 📱 Testing Responsiveness

Test on different screen sizes:
- Mobile: Use Chrome DevTools Device Mode
- Tablet: 768px - 968px
- Desktop: 968px+

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist/rohan-portfolio/browser`

## 📋 Content Guidelines

### Writing Style
- Keep it professional but personable
- Focus on achievements and impact
- Use specific numbers and metrics
- Highlight technologies you've actually used

### Project Descriptions
- Start with the problem/goal
- Explain your solution
- List key achievements
- Include relevant technologies

### Experience Descriptions
- Use action verbs (Architected, Implemented, Optimized)
- Quantify impact (improved by X%, reduced by Y)
- Focus on technical contributions

## 🆘 Common Issues

### Theme Not Switching?
- Check browser console for errors
- Verify localStorage is enabled
- Clear browser cache

### Sections Not Scrolling Smoothly?
- Check that section IDs match navigation links
- Verify ScrollService is injected properly

### Build Errors?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check TypeScript errors in terminal

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips

1. **Keep it Updated**: Regularly update your projects and experience
2. **Test Everywhere**: Check on different browsers and devices
3. **Performance**: Optimize images (use WebP) and keep bundle size small
4. **Analytics**: Consider adding Google Analytics or similar
5. **Backup**: Commit regularly to Git

---

Need help? Check the full README.md for detailed documentation.
