import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

/**
 * About Section Component
 * Professional summary and introduction
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule, ScrollAnimationDirective],
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
    {
      title: 'Team Player',
      description: 'Believe in collaborative growth and knowledge sharing',
      iconBg: 'linear-gradient(135deg, #f43f5e, #ec4899)',
      matIcon: 'favorite'
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices',
      iconBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      matIcon: 'lightbulb'
    },
    {
      title: 'Problem Solver',
      description: 'Turning complex challenges into simple solutions',
      iconBg: 'linear-gradient(135deg, #f97316, #eab308)',
      matIcon: 'coffee'
    }
  ];
}
