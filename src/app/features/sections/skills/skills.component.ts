import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  logo: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  iconBg: string;
  skills: Skill[];
}

/**
 * Skills Section Component
 * Displays categorized technical skills
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly hoveredSkill = signal<string | null>(null);

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Technologies',
      icon: 'code',
      iconBg: 'linear-gradient(135deg, #2563eb, #60a5fa)',
      skills: [
        { name: 'Angular', level: 'Expert', percentage: 95, logo: 'assets/skills/angular.svg' },
        { name: 'TypeScript', level: 'Advanced', percentage: 90, logo: 'assets/skills/typescript.svg' },
        { name: 'JavaScript', level: 'Advanced', percentage: 88, logo: 'assets/skills/javascript.svg' },
        { name: 'HTML5', level: 'Expert', percentage: 95, logo: 'assets/skills/html5.svg' },
        { name: 'CSS3', level: 'Advanced', percentage: 90, logo: 'assets/skills/css3.svg' },
        { name: 'Microfrontends', level: 'Advanced', percentage: 85, logo: 'assets/skills/webpack.svg' }
      ]
    },
    {
      title: 'State Management',
      icon: 'storage',
      iconBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      skills: [
        { name: 'NGRX', level: 'Advanced', percentage: 85, logo: 'assets/skills/ngrx.svg' },
        {
          name: 'Signal Store',
          level: 'Advanced',
          percentage: 85,
          logo: 'assets/skills/angular.svg'
        },
        { name: 'RxJS', level: 'Advanced', percentage: 88, logo: 'assets/skills/rxjs.svg' }
      ]
    },
    {
      title: 'UI Frameworks & Design',
      icon: 'palette',
      iconBg: 'linear-gradient(135deg, #f43f5e, #ec4899)',
      skills: [
        {
          name: 'Angular Material',
          level: 'Advanced',
          percentage: 90,
          logo: 'assets/skills/materialdesign.svg'
        },
        { name: 'PrimeNG', level: 'Advanced', percentage: 88, logo: 'assets/skills/primeng.svg' },
        { name: 'Tailwind CSS', level: 'Advanced', percentage: 85, logo: 'assets/skills/tailwindcss.svg' },
        {
          name: 'Responsive Design',
          level: 'Expert',
          percentage: 95,
          logo: 'assets/skills/mdnwebdocs.svg'
        }
      ]
    },
    {
      title: 'Tools & Development',
      icon: 'build',
      iconBg: 'linear-gradient(135deg, #f97316, #eab308)',
      skills: [
        { name: 'Git', level: 'Advanced', percentage: 90, logo: 'assets/skills/git.svg' },
        {
          name: 'RESTful APIs',
          level: 'Advanced',
          percentage: 88,
          logo: 'assets/skills/openapiinitiative.svg'
        },
        { name: 'SCSS', level: 'Advanced', percentage: 90, logo: 'assets/skills/sass.svg' },
        { name: 'Cursor', level: 'Proficient', percentage: 80, logo: 'assets/skills/cursor.svg' },
        { name: 'Storybook', level: 'Proficient', percentage: 80, logo: 'assets/skills/storybook.svg' }
      ]
    }
  ];

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert':
        return 'primary';
      case 'Advanced':
        return 'accent';
      case 'Proficient':
        return 'warn';
      default:
        return 'primary';
    }
  }

  onSkillHover(skillName: string | null): void {
    this.hoveredSkill.set(skillName);
  }
}
