import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  percentage: number;
  icon?: string;
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
  imports: [
    CommonModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    ScrollAnimationDirective
  ],
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
        { name: 'Angular', level: 'Expert', percentage: 95, icon: 'code' },
        { name: 'TypeScript', level: 'Advanced', percentage: 90, icon: 'code' },
        { name: 'JavaScript', level: 'Advanced', percentage: 88, icon: 'javascript' },
        { name: 'HTML5', level: 'Expert', percentage: 95, icon: 'html' },
        { name: 'CSS3', level: 'Advanced', percentage: 90, icon: 'css' }
      ]
    },
    {
      title: 'State Management',
      icon: 'storage',
      iconBg: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      skills: [
        { name: 'NGRX', level: 'Advanced', percentage: 85, icon: 'storage' },
        { name: 'Signal Store', level: 'Advanced', percentage: 85, icon: 'signal_cellular_alt' },
        { name: 'RxJS', level: 'Advanced', percentage: 88, icon: 'timeline' }
      ]
    },
    {
      title: 'UI Frameworks & Design',
      icon: 'palette',
      iconBg: 'linear-gradient(135deg, #f43f5e, #ec4899)',
      skills: [
        { name: 'Angular Material', level: 'Advanced', percentage: 90, icon: 'widgets' },
        { name: 'Tailwind CSS', level: 'Advanced', percentage: 85, icon: 'palette' },
        { name: 'Responsive Design', level: 'Expert', percentage: 95, icon: 'devices' }
      ]
    },
    {
      title: 'Tools & Development',
      icon: 'build',
      iconBg: 'linear-gradient(135deg, #f97316, #eab308)',
      skills: [
        { name: 'Git', level: 'Advanced', percentage: 90, icon: 'source' },
        { name: 'RESTful APIs', level: 'Advanced', percentage: 88, icon: 'api' },
        { name: 'SCSS', level: 'Advanced', percentage: 90, icon: 'style' },
        { name: 'Cursor', level: 'Proficient', percentage: 80, icon: 'edit' },
        { name: 'Storybook', level: 'Proficient', percentage: 80, icon: 'menu_book' }
      ]
    }
  ];

  getLevelColor(level: string): string {
    switch (level) {
      case 'Expert': return 'primary';
      case 'Advanced': return 'accent';
      case 'Proficient': return 'warn';
      default: return 'primary';
    }
  }

  onSkillHover(skillName: string | null): void {
    this.hoveredSkill.set(skillName);
  }
}
