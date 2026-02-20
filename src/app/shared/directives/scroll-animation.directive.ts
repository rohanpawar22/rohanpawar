import { Directive, ElementRef, OnInit, OnDestroy, signal } from '@angular/core';

/**
 * Scroll Animation Directive
 * Adds fade-in animation when element enters viewport
 */
@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
  host: {
    '[class.scroll-animate]': 'true',
    '[class.scroll-animate--visible]': 'isVisible()',
  }
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  readonly isVisible = signal(false);
  private observer: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
