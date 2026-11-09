import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  CONTACT_LIMITS,
  ContactService,
  RateLimitedError
} from '../../../core/services/contact.service';
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

  /** Honeypot value; bound to a hidden input that only bots fill in */
  honeypot = '';

  readonly isSubmitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly submitError = signal(false);
  readonly rateLimited = signal(false);
  readonly limits = CONTACT_LIMITS;
  readonly formOpen = signal(false);

  private readonly contactService = inject(ContactService);

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid || this.isSubmitting()) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);
    this.submitSuccess.set(false);

    try {
      await this.contactService.send({
        ...this.formData(),
        website: this.honeypot,
        page: window.location.href
      });

      form.resetForm();
      this.formData.set({ name: '', email: '', message: '' });
      this.submitSuccess.set(true);
      setTimeout(() => this.submitSuccess.set(false), 4000);
    } catch (err) {
      // Keep what the visitor typed so they can retry
      console.error('Contact form submission failed', err);
      this.rateLimited.set(err instanceof RateLimitedError);
      this.submitError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
