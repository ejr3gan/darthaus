import { ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('dart-haus');
  protected readonly navOpen = signal(false);

  constructor(viewportScroller: ViewportScroller) {
    // Offset in-page anchor scrolling so targets clear the sticky nav.
    viewportScroller.setOffset([0, 90]);
  }

  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }

  protected closeNav(): void {
    this.navOpen.set(false);
  }
}
