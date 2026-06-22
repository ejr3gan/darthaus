import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly reviews = [
    {
      quote: "Just been to the Dart Haus and had a wonderful experience. Very friendly and welcoming. Great selections and advice as well. Will definitely be heading back.",
      author: 'Martin P.',
      detail: 'Facebook review'
    },
    {
      quote: "Popped into The Dart Haus this morning, great shop and set up with a friendly knowledgeable owner, plenty of choice and will definitely be back.",
      author: 'Daniel K.',
      detail: 'Facebook review'
    },
    {
      quote: "Just want to say a massive thank you for today's help. Lovely shop, friendly service and loads of advice until you're happy with set up! Top darts shop fully recommended visiting! Btw just got my 2nd 180! So a big thanks!",
      author: 'Michael B.',
      detail: 'Facebook review'
    }
  ];

  currentReviewIndex = 0;
  isReviewAnimating = true;
  isPaused = false;
  private readonly autoRotateMs = 6000;
  private autoRotateTimerId: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.isPaused = true;
      return;
    }

    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  previousReview(): void {
    this.changeReviewBy(-1);
    this.restartAutoRotate();
  }

  nextReview(): void {
    this.changeReviewBy(1);
    this.restartAutoRotate();
  }

  pauseAutoRotate(): void {
    this.stopAutoRotate();
  }

  resumeAutoRotate(): void {
    if (!this.isPaused) {
      this.startAutoRotate();
    }
  }

  toggleAutoRotate(): void {
    this.isPaused = !this.isPaused;

    if (this.isPaused) {
      this.stopAutoRotate();
    } else {
      this.startAutoRotate();
    }
  }

  private startAutoRotate(): void {
    if (this.autoRotateTimerId !== null) {
      return;
    }

    this.autoRotateTimerId = setInterval(() => {
      this.changeReviewBy(1);
      this.cdr.detectChanges();
    }, this.autoRotateMs);
  }

  private stopAutoRotate(): void {
    if (this.autoRotateTimerId === null) {
      return;
    }

    clearInterval(this.autoRotateTimerId);
    this.autoRotateTimerId = null;
  }

  private restartAutoRotate(): void {
    this.stopAutoRotate();
    this.startAutoRotate();
  }

  private changeReviewBy(step: number): void {
    this.currentReviewIndex =
      (this.currentReviewIndex + step + this.reviews.length) % this.reviews.length;
    this.triggerReviewAnimation();
  }

  private triggerReviewAnimation(): void {
    this.isReviewAnimating = false;
    this.cdr.detectChanges();

    requestAnimationFrame(() => {
      this.isReviewAnimating = true;
      this.cdr.detectChanges();
    });
  }
}
