import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image?: string;
}

/**
 * Projects Section Component
 * Showcases professional projects
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule,
    ScrollAnimationDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly selectedProject = signal<Project | null>(null);
  readonly hoveredProject = signal<number | null>(null);

  constructor(private dialog: MatDialog) {}

  readonly projects: Project[] = [
    {
      title: 'Enterprise Data Management Platform',
      description: 'A comprehensive data protection and management solution for enterprise clients with advanced backup and recovery features.',
      technologies: ['Angular 16+', 'TypeScript', 'Angular Material', 'Tailwind CSS', 'RxJS', 'RESTful APIs'],
      achievements: [
        'Developed scalable UI components handling large datasets',
        'Implemented real-time data visualization dashboards',
        'Achieved 95+ Lighthouse performance score',
        'Reduced load time by 40% through lazy loading optimization'
      ]
    },
    {
      title: 'Admin & User Portal Application',
      description: 'Dual-interface application with separate admin and user portals for comprehensive business management and user operations.',
      technologies: ['Angular 15', 'NGRX', 'Angular Material', 'SCSS', 'Signal Store'],
      achievements: [
        'Migrated from module-based to component-level architecture',
        'Implemented NGRX for efficient state management',
        'Created 50+ reusable UI components',
        'Delivered pixel-perfect implementation from Figma designs'
      ]
    },
    {
      title: 'Analytics & Reporting Dashboard',
      description: 'Real-time analytics platform with interactive charts, custom reports, and data visualization capabilities.',
      technologies: ['Angular 14', 'TypeScript', 'Chart.js', 'RxJS', 'RESTful APIs'],
      achievements: [
        'Processed and visualized 1M+ data points efficiently',
        'Implemented real-time updates using WebSocket integration',
        'Built export functionality for multiple report formats',
        'Optimized rendering for large datasets'
      ]
    },
    {
      title: 'Component Library & Design System',
      description: 'Reusable component library built with Storybook for consistent UI across multiple applications.',
      technologies: ['Angular', 'Storybook', 'Angular Material', 'SCSS', 'TypeScript'],
      achievements: [
        'Created 40+ documented and tested components',
        'Reduced development time by 30% across teams',
        'Implemented accessibility standards (WCAG 2.1)',
        'Integrated automated visual regression testing'
      ]
    }
  ];

  openProjectDetails(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProjectDetails(): void {
    this.selectedProject.set(null);
  }
}
