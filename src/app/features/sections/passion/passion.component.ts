import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Passion Section Component
 * Showcases personal interests - motorbike riding and content creation
 */
@Component({
  selector: 'app-passion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passion.component.html',
  styleUrl: './passion.component.scss'
})
export class PassionComponent {
  readonly youtubeChannel = 'https://www.youtube.com/@RoadManRohan';
  readonly instagramProfile = 'https://www.instagram.com/roadmanrohan/';
}
