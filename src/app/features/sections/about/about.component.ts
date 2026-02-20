import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * About Section Component
 * Professional summary and introduction
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly aboutText = `4.5 years of experience as a Frontend Software Engineer specializing in Angular and modern web technologies. 
  Skilled in developing secure, scalable, and high-performance web applications following Agile methodologies. 
  Experienced in accessibility, and full SDLC processes within enterprise environments.`;

  readonly expertise = [
    'Expertise in developing pixel-perfect, reusable UI components with Angular, TypeScript, HTML, and CSS',
    'Proven ability in state management using NGRX and signal store for efficient and scalable applications',
    'Proficient in utilizing Angular Material and Tailwind for enhanced UI design and development',
    'Experience in migrating web applications from module-based to component-level architecture',
    'Successfully developed key features from design to production for both admin and user-facing web applications',
    'Leveraged AI-powered tools to accelerate development, improve code quality, and optimize debugging workflows'
  ];

  readonly highlights = [
    { value: '4.5+', label: 'Years Experience' },
    { value: 'Frontend', label: 'Specialization' },
    { value: 'Pune', label: 'Location' }
  ];
}
