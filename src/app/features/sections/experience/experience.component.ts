import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

interface SubExperience {
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface Experience {
  role: string;
  company: string;
  shortName: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  icon: string;
  subExperience?: SubExperience;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    ScrollAnimationDirective
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: '0', overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: '1', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('320ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ])
  ]
})
export class ExperienceComponent {
  expandedIndex: number | null = null;

  toggle(i: number): void {
    this.expandedIndex = this.expandedIndex === i ? null : i;
  }
  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Coditas (Pune)',
      shortName: 'Coditas',
      duration: 'Jun 2024 - Present',
      icon: 'rocket_launch',
      description: 'Building Angular features and a Design System Library for Medgami, a knowledge-sharing platform for doctors.',
      responsibilities: [
        'Architected a scalable Angular Design System Library with 25+ reusable UI components, ensuring consistency across enterprise apps',
        'Led migration from module-based to standalone architecture and integrated NGRX + Signal Store for improved scalability',
        'Implemented WCAG-compliant components with ARIA support, keyboard navigation, and a SCSS design-token system',
        'Delivered end-to-end features independently from design to deployment within Agile sprints'
      ],
      technologies: ['Angular 19', 'TypeScript', 'NGRX', 'Signal Store', 'SCSS', 'Storybook', 'Jira']
    },
    {
      role: 'Software Engineer',
      company: 'Onnet Systems (Bangalore)',
      shortName: 'Onnet Systems',
      duration: 'Nov 2022 - May 2024',
      icon: 'trending_up',
      description: 'Improved performance and stability of OTT and video surveillance admin applications using Angular.',
      responsibilities: [
        'Built a VSaaS Admin Console with Angular 17 and a UI Builder tool supporting charts, video, and carousels across TV and mobile',
        'Enhanced SACMS with reactive forms, model-driven data approach, and optimized API responses',
        'Upgraded the application from Angular 10 to 16 and resolved critical bugs across IPTV, CAS, and OTT consoles'
      ],
      technologies: ['Angular 10-17', 'TypeScript', 'Reactive Forms', 'RESTful APIs']
    },
    {
      role: 'Software Engineer',
      company: 'Tech Mahindra (Pune)',
      shortName: 'Tech Mahindra',
      duration: 'Nov 2020 - Jun 2022',
      icon: 'code',
      description: 'Developed enterprise order management web applications for the Flow team.',
      responsibilities: [
        'Built Flowmanage (Web) and Flowdesktop apps with Angular 8 — orders grid, logs, and core order management flows',
        'Analyzed live system faults and debugged application issues to maintain smooth operations'
      ],
      technologies: ['Angular 8', 'TypeScript', 'JavaScript'],
      subExperience: {
        role: 'Internship Trainee',
        duration: 'Nov 2020 - Jan 2021',
        description: 'Trained in core web technologies and built mini-projects applying HTML, CSS, and JavaScript.',
        responsibilities: [
          'Built mini-projects using HTML, CSS, and JavaScript during onboarding training'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript']
      }
    }
  ];
}
