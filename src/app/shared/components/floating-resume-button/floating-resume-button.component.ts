import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Floating Resume Button Component
 * Fixed position button at bottom-right for accessing resume
 */
@Component({
  selector: 'app-floating-resume-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <button
      mat-fab
      class="floating-resume-btn"
      (click)="openResume()"
      matTooltip="View Resume"
      matTooltipPosition="left"
      matTooltipClass="custom-tooltip"
      aria-label="View Resume">
      <mat-icon>description</mat-icon>
    </button>
  `,
  styles: [`
    .floating-resume-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
      background: var(--primary-gradient) !important;
      color: white !important;
      box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4) !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        transform: scale(1.1) translateY(-4px);
        box-shadow: 0 12px 32px rgba(37, 99, 235, 0.5) !important;
        animation: none;
      }

      &:active {
        transform: scale(0.95);
      }

      mat-icon {
        font-size: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (max-width: 768px) {
        bottom: 1.5rem;
        right: 1.5rem;
        transform: scale(0.9);

        &:hover {
          transform: scale(1) translateY(-4px);
        }
      }
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
      }
      50% {
        box-shadow: 0 8px 32px rgba(37, 99, 235, 0.6);
      }
    }

    // Custom tooltip styling (global)
    :host ::ng-deep .custom-tooltip {
      background-color: #000000 !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 0.875rem !important;
      padding: 0.5rem 0.875rem !important;
      border-radius: 6px !important;

      .mdc-tooltip__surface {
        background-color: #000000 !important;
        color: #ffffff !important;
        font-weight: 700 !important;
      }
    }
  `]
})
export class FloatingResumeButtonComponent {
  openResume(): void {
    window.open('/assets/RohanPawar_Angular.pdf', '_blank');
  }
}
