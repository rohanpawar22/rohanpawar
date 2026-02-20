import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Footer Component
 * Site footer with copyright
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
