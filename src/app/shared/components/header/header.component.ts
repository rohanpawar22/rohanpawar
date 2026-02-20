import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../core/services/theme.service';
import { ScrollService } from '../../../core/services/scroll.service';

/**
 * Header Component
 * Sticky navigation header with icon-based nav and theme toggle
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);
  private readonly scrollService = inject(ScrollService);

  // Mobile menu state
  readonly mobileMenuOpen = signal(false);
  
  // Navigation items with icons
  readonly navItems = [
    { label: 'Home', sectionId: 'hero', icon: 'home' },
    { label: 'About', sectionId: 'about', icon: 'person' },
    { label: 'Skills', sectionId: 'skills', icon: 'code' },
    { label: 'Experience', sectionId: 'experience', icon: 'work' },
    { label: 'Contact', sectionId: 'contact', icon: 'email' }
  ];

  // Expose theme signal for template
  readonly currentTheme = this.themeService.theme;

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(state => !state);
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  /**
   * Navigate to section
   */
  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.closeMobileMenu();
  }

  /**
   * Toggle theme
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
