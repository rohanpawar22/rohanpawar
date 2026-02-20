import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FloatingResumeButtonComponent } from './shared/components/floating-resume-button/floating-resume-button.component';
import { HeroComponent } from './features/sections/hero/hero.component';
import { AboutComponent } from './features/sections/about/about.component';
import { SkillsComponent } from './features/sections/skills/skills.component';
import { ExperienceComponent } from './features/sections/experience/experience.component';
import { PassionComponent } from './features/sections/passion/passion.component';
import { ContactComponent } from './features/sections/contact/contact.component';

/**
 * Root Application Component
 * Main entry point for the portfolio application
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FloatingResumeButtonComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    PassionComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
