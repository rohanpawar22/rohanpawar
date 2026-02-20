import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
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
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly activeTab = signal(0);

  selectTab(index: number): void {
    this.activeTab.set(index);
  }

  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'Coditas (Pune)',
      shortName: 'Coditas',
      duration: 'Jun 2024 - Present',
      icon: 'rocket_launch',
      description: 'Responsible for developing innovative UI features and architectural enhancements using Angular, contributing to two major projects: Medgami (a knowledge-sharing platform for doctors) and a comprehensive Angular Design System Library built from scratch.',
      responsibilities: [
        'Built pixel-perfect, reusable Angular components and optimized performance, contributing significantly to a seamless user experience across web applications',
        'Played a key role in the migration from module-based to component-level architecture and integrated NGRX + Signal Store, improving scalability and state management',
        'Delivered end-to-end features independently from design to deployment while collaborating in Agile sprints using Jira',
        'Architected and developed a scalable Angular Design System Library with 25+ reusable UI components, ensuring UI/UX consistency across enterprise apps',
        'Implemented modern Angular 19 standalone architecture and a SCSS design token system, improving maintainability and reducing bundle size',
        'Integrated Storybook and built accessible, WCAG compliant components with ARIA, keyboard navigation, and focus management'
      ],
      achievements: [
        'Enhanced application performance through the development of optimized and reusable UI components',
        'Improved code maintainability and scalability by leading the migration to a component-level architecture'
      ],
      technologies: ['Angular 19', 'TypeScript', 'NGRX', 'Signal Store', 'SCSS', 'Storybook', 'Jira']
    },
    {
      role: 'Software Engineer',
      company: 'Onnet Systems (Bangalore)',
      shortName: 'Onnet Systems',
      duration: 'Nov 2022 - May 2024',
      icon: 'trending_up',
      description: 'Responsible for improving application performance and stability through Angular Framework for user and admin applications.',
      responsibilities: [
        'Developed a time-bound VSaaS Admin Console using Angular 17, creating intuitive control panels with modular components',
        'Improved the OTT aggregation product (Pishow) ACMS by resolving critical bugs, enhancing product stability and performance',
        'Engineered a UI Builder tool enabling admins to design customizable pages incorporating ng2-charts, videoJs, and carousel features for display across TV and mobile applications',
        'Enhanced the SACMS web application by implementing reactive forms with improved validation and optimizing API responses yielding a model-driven data approach',
        'Upgraded the Angular version from 10 to 16, modernizing the application framework and enhancing its capabilities',
        'Proactively resolved critical bugs providing increased application reliability and added new features in web apps, like IPTV, CAS, and OTT Admin & Subscriber Console'
      ],
      achievements: [
        'Created functional and aesthetic tools that streamline admin tasks for video management',
        'Provided innovative tools and resolution of critical bugs in web applications',
        'Enhanced user experience via proactive development of tools with Angular Framework'
      ],
      technologies: ['Angular 10-17', 'TypeScript', 'Reactive Forms', 'RESTful APIs']
    },
    {
      role: 'Software Engineer',
      company: 'Tech Mahindra (Pune)',
      shortName: 'Tech Mahindra',
      duration: 'Nov 2020 - Jun 2022',
      icon: 'code',
      description: 'Involved in developing web applications that handle the smooth running of orders through the system.',
      responsibilities: [
        'Contributed to the Flow team and developed the Flowmanage (Web) and Flowdesktop applications, which facilitated efficient order management',
        'Developed Angular components for orders grid, logs, and other essential functionalities',
        'Analyzed live system faults and debugged application-related issues, ensuring smooth system operation',
        'Used Angular 8 for building enterprise order management applications'
      ],
      achievements: [
        'Enhanced order processing capabilities through the development of critical Angular components',
        'Improved system reliability via fault analysis and debugging processes with increased efficiency'
      ],
      technologies: ['Angular 8', 'TypeScript', 'JavaScript'],
      subExperience: {
        role: 'Internship Trainee',
        duration: 'Nov 2020 - Jan 2021',
        description: 'Underwent training in web technologies: HTML, CSS, and Javascript to support learning application skills for software development.',
        responsibilities: [
          'Trained on fundamental web technologies including HTML, CSS, and JavaScript',
          'Developed mini-projects during training, applying web development skills in a practical context',
          'Enhanced problem-solving abilities through practical experience in web technologies'
        ],
        technologies: ['HTML', 'CSS', 'JavaScript']
      }
    }
  ];
}
