import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

/**
 * Contact Section Component
 * Contact form and information
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly email = 'rohan22pawar@gmail.com';
  readonly linkedin = 'https://www.linkedin.com/in/rohanp98/';
  readonly github = 'https://github.com/rohanpawar22';
  readonly phone = '+91 9823752394';
  readonly location = 'Pune, India';

  readonly formData = signal({
    name: '',
    email: '',
    message: ''
  });

  readonly isSubmitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly formOpen = signal(false);

  onSubmit(): void {
    // This is a placeholder - implement actual form submission logic
    this.isSubmitting.set(true);
    
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      
      // Reset form
      this.formData.set({
        name: '',
        email: '',
        message: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 3000);
    }, 1000);
  }
}
