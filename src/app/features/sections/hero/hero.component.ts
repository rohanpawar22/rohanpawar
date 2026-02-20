import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Hero Section Component
 * Landing section with introduction and animated text
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly name = 'Rohan Pawar';
  readonly roles = ['Computer Engineer', 'Web Developer' ,'Angular Geek', 'Content Creator', 'Bike Enthusiast'];
  
  displayedText = signal('');
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private isPaused = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type(): void {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (this.isPaused) {
      this.timeoutId = setTimeout(() => {
        this.isPaused = false;
        this.isDeleting = true;
        this.type();
      }, 2000);
      return;
    }

    if (!this.isDeleting) {
      // Typing forward
      if (this.currentCharIndex <= currentRole.length) {
        this.displayedText.set(currentRole.substring(0, this.currentCharIndex));
        this.currentCharIndex++;
        this.timeoutId = setTimeout(() => this.type(), 100);
      } else {
        // Finished typing, pause before deleting
        this.isPaused = true;
        this.type();
      }
    } else {
      // Deleting
      if (this.currentCharIndex > 0) {
        this.currentCharIndex--;
        this.displayedText.set(currentRole.substring(0, this.currentCharIndex));
        this.timeoutId = setTimeout(() => this.type(), 50);
      } else {
        // Finished deleting, move to next word
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.timeoutId = setTimeout(() => this.type(), 500);
      }
    }
  }
}
