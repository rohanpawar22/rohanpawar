import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * Theme Service
 * Manages light/dark theme switching and persistence
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal for reactive theme state
  readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Effect to apply theme changes to DOM
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
      this.persistTheme(currentTheme);
    });
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  /**
   * Set a specific theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  /**
   * Get initial theme from localStorage or system preference
   */
  private getInitialTheme(): Theme {
    // Check localStorage first
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  /**
   * Apply theme to DOM
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Update color-scheme for native elements
    document.body.style.colorScheme = theme;
  }

  /**
   * Persist theme to localStorage
   */
  private persistTheme(theme: Theme): void {
    localStorage.setItem('portfolio-theme', theme);
  }
}
