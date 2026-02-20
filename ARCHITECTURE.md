# Component Architecture Guide

## 🏗️ Application Structure

This document explains how the components are organized and how they work together.

## Component Hierarchy

```
App (Root)
│
├── Header (Shared)
│   ├── Logo
│   ├── Navigation Menu
│   │   └── Nav Items (Home, About, Skills, etc.)
│   ├── Theme Toggle Button
│   └── Mobile Menu Toggle
│
├── Main Content
│   │
│   ├── Hero Section
│   │   ├── Badge (Experience)
│   │   ├── Title & Subtitle
│   │   ├── Description
│   │   ├── CTA Buttons
│   │   └── Animated Background
│   │
│   ├── About Section
│   │   ├── Professional Summary
│   │   ├── Expertise List
│   │   └── Stats Cards (Years, Projects, Technologies)
│   │
│   ├── Skills Section
│   │   └── Skill Categories
│   │       ├── Frontend Skills
│   │       ├── State Management Skills
│   │       ├── UI/UX Skills
│   │       └── Tools & Others
│   │
│   ├── Experience Section
│   │   └── Timeline Items
│   │       ├── Role & Company
│   │       ├── Duration
│   │       ├── Description
│   │       ├── Responsibilities List
│   │       └── Technologies Used
│   │
│   ├── Projects Section
│   │   ├── Project Cards
│   │   │   ├── Title
│   │   │   ├── Description
│   │   │   └── Technologies
│   │   └── Project Detail Modal
│   │       ├── Full Description
│   │       ├── Technologies Used
│   │       └── Key Achievements
│   │
│   ├── Passion Section
│   │   ├── Motorbike Icon
│   │   ├── Content Description
│   │   └── Social Links (YouTube, Instagram)
│   │
│   └── Contact Section
│       ├── Contact Information
│       │   ├── Email
│       │   ├── LinkedIn
│       │   └── GitHub
│       └── Contact Form
│           ├── Name Field
│           ├── Email Field
│           ├── Message Field
│           └── Submit Button
│
└── Footer (Shared)
    ├── Brand/Logo
    ├── Tagline
    ├── Social Links
    └── Copyright
```

## 🔧 Core Services

### ThemeService
**Location**: `src/app/core/services/theme.service.ts`

**Purpose**: Manages light/dark theme switching

**Key Features**:
- Uses Angular Signals for reactive state
- Persists theme preference to localStorage
- Detects system theme preference
- Applies theme to DOM via CSS variables

**Usage**:
```typescript
// Inject the service
private themeService = inject(ThemeService);

// Access current theme
this.themeService.theme() // returns 'light' or 'dark'

// Toggle theme
this.themeService.toggleTheme();

// Set specific theme
this.themeService.setTheme('dark');
```

### ScrollService
**Location**: `src/app/core/services/scroll.service.ts`

**Purpose**: Handles smooth scrolling to sections

**Key Features**:
- Smooth scroll animations
- Accounts for fixed header offset
- Cross-browser compatible

**Usage**:
```typescript
// Inject the service
private scrollService = inject(ScrollService);

// Scroll to a section
this.scrollService.scrollToSection('projects');

// Scroll to top
this.scrollService.scrollToTop();
```

## 📦 Component Details

### Header Component
**Files**: 
- `src/app/shared/components/header/header.component.ts`
- `src/app/shared/components/header/header.component.html`
- `src/app/shared/components/header/header.component.scss`

**Responsibilities**:
- Fixed navigation bar
- Theme toggle
- Smooth scroll navigation
- Mobile responsive menu
- Active section highlighting

**Key Features**:
- Sticky positioning
- Mobile hamburger menu
- Backdrop blur effect
- Smooth transitions

### Section Components

Each section follows a similar pattern:

#### Component Structure
```typescript
@Component({
  selector: 'app-[section-name]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './[section-name].component.html',
  styleUrl: './[section-name].component.scss'
})
export class [SectionName]Component {
  // Data and methods
}
```

#### Styling Pattern
Each section includes:
- Section padding (6rem top/bottom)
- Container with max-width (1400px)
- Responsive breakpoints
- Hover effects
- Smooth transitions

### Footer Component
**Files**:
- `src/app/shared/components/footer/footer.component.ts`
- `src/app/shared/components/footer/footer.component.html`
- `src/app/shared/components/footer/footer.component.scss`

**Responsibilities**:
- Brand identity
- Social media links
- Copyright information
- Consistent styling with theme

## 🎨 Styling Architecture

### CSS Variables (Theme System)
All colors and common values are defined as CSS variables:

```scss
:root {
  --primary-color: #6366f1;
  --bg-primary: #ffffff;
  --text-primary: #111827;
  // ... more variables
}
```

### Dark Theme Override
```scss
[data-theme='dark'] {
  --primary-color: #818cf8;
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
  // ... more overrides
}
```

### Component Styling Pattern
Each component follows BEM naming:

```scss
.component-name {
  // Block
  
  &__element {
    // Element
  }
  
  &__element--modifier {
    // Modifier
  }
}
```

## 🔄 Data Flow

### Theme Toggle Flow
```
User clicks toggle button
    ↓
Header Component calls themeService.toggleTheme()
    ↓
ThemeService updates signal
    ↓
Effect triggers in ThemeService
    ↓
DOM attribute updated (data-theme="dark")
    ↓
CSS variables recalculated
    ↓
All components re-styled automatically
    ↓
New theme saved to localStorage
```

### Navigation Flow
```
User clicks nav item
    ↓
Header Component calls scrollService.scrollToSection()
    ↓
ScrollService finds target element by ID
    ↓
Smooth scroll animation triggered
    ↓
Page scrolls to section
```

## 📱 Responsive Design Strategy

### Breakpoints
```scss
// Mobile: < 640px
// Tablet: 640px - 968px  
// Desktop: 968px - 1400px
// Large: > 1400px
```

### Responsive Patterns Used

1. **Grid Layouts**
   - Auto-fit/auto-fill for flexible columns
   - Single column on mobile

2. **Flex Layouts**
   - Row on desktop, column on mobile
   - Wrap for better mobile experience

3. **Typography**
   - `clamp()` for fluid typography
   - Smaller sizes on mobile

4. **Navigation**
   - Horizontal menu on desktop
   - Hamburger menu on mobile
   - Slide-in drawer on mobile

## 🎯 Performance Optimizations

### Built-in Optimizations
1. **Standalone Components**: Smaller bundle size
2. **OnPush Change Detection**: Where applicable
3. **CSS Variables**: Efficient theme switching
4. **Minimal Dependencies**: Only Angular Material
5. **Tree Shaking**: Unused code removed in production

### Recommended Additions
1. **Image Lazy Loading**: For project images
2. **Route Lazy Loading**: For future pages
3. **Service Workers**: For PWA capabilities
4. **CDN**: For static assets
5. **Compression**: Enable gzip/brotli

## 🧪 Testing Approach

### Component Testing
Each component can be tested independently:

```typescript
describe('HeroComponent', () => {
  it('should display the correct name', () => {
    // Test implementation
  });
});
```

### Service Testing
Services have clear interfaces for easy mocking:

```typescript
describe('ThemeService', () => {
  it('should toggle theme', () => {
    // Test implementation
  });
});
```

## 🔌 Extending the Application

### Adding a New Section

1. **Generate Component**
   ```bash
   ng generate component features/sections/new-section
   ```

2. **Add to App Component**
   ```typescript
   imports: [
     // ... other imports
     NewSectionComponent
   ]
   ```

3. **Add to Template**
   ```html
   <app-new-section></app-new-section>
   ```

4. **Add to Navigation**
   Update `navItems` in header component

5. **Add Section ID**
   ```html
   <section id="new-section">
   ```

### Adding a New Service

1. **Generate Service**
   ```bash
   ng generate service core/services/new-service
   ```

2. **Provide in Root**
   ```typescript
   @Injectable({
     providedIn: 'root'
   })
   ```

3. **Inject Where Needed**
   ```typescript
   private newService = inject(NewService);
   ```

## 📚 Key Patterns Used

### Signals Pattern
```typescript
readonly someSignal = signal<Type>(initialValue);

// Update
this.someSignal.set(newValue);
this.someSignal.update(current => transform(current));

// Read in template
{{ someSignal() }}
```

### Service Injection
```typescript
// Modern inject() function
private readonly service = inject(ServiceName);
```

### Component Communication
- Services for cross-component state
- Signals for reactive updates
- Event emitters for parent-child communication

## 🎓 Learning Points

This codebase demonstrates:

1. **Modern Angular**: Standalone components, Signals
2. **Clean Architecture**: Clear separation of concerns
3. **Type Safety**: Full TypeScript coverage
4. **Maintainability**: Well-organized, documented code
5. **Performance**: Optimized bundle and runtime
6. **User Experience**: Smooth interactions, responsive design
7. **Accessibility**: Semantic HTML, ARIA labels
8. **SEO**: Meta tags, structured data

---

**Questions?** Check the inline comments in each component for more details!
