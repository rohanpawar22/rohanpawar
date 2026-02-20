import { Injectable } from '@angular/core';

/**
 * Scroll Service
 * Handles smooth scrolling to sections
 */
@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  /**
   * Smooth scroll to a section by ID
   */
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Scroll to top of page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
