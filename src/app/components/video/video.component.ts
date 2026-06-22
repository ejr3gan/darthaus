import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Lazy YouTube embed. Renders a lightweight thumbnail + play-button facade
 * and only loads the (heavy) YouTube iframe once the user clicks play, so the
 * embed costs almost nothing on initial page load.
 *
 * Usage: <app-video videoId="abc123" title="Junior coaching: the grip" />
 */
@Component({
  selector: 'app-video',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="video-embed">
      @if (loaded()) {
        <iframe
          [src]="embedUrl()"
          [title]="title()"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      } @else {
        <button
          type="button"
          class="video-facade"
          (click)="play()"
          [attr.aria-label]="'Play video: ' + title()">
          <img [src]="thumbUrl()" [alt]="title()" loading="lazy" width="480" height="270">
          <span class="video-play" aria-hidden="true">
            <svg viewBox="0 0 68 48">
              <path
                class="video-play-bg"
                d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.6a8.6 8.6 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.6a8.6 8.6 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.3z" />
              <path d="M27 34l18-10-18-10z" fill="#fff" />
            </svg>
          </span>
        </button>
      }
    </div>
  `,
  styles: [
    `
      .video-embed {
        position: relative;
        aspect-ratio: 16 / 9;
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 18px 34px rgba(12, 12, 12, 0.14);
        background: #000;
      }

      .video-embed iframe,
      .video-facade {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }

      .video-facade {
        padding: 0;
        margin: 0;
        cursor: pointer;
        background: none;
        display: block;
      }

      .video-facade img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .video-facade::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.12);
        transition: background 0.2s ease;
      }

      .video-facade:hover::after,
      .video-facade:focus-visible::after {
        background: rgba(0, 0, 0, 0.02);
      }

      .video-facade:focus-visible {
        outline: 3px solid var(--ember, #b11e2d);
        outline-offset: 2px;
      }

      .video-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 68px;
        height: 48px;
        z-index: 1;
        transition: transform 0.2s ease;
      }

      .video-play svg {
        width: 100%;
        height: 100%;
      }

      .video-play-bg {
        fill: var(--ember, #b11e2d);
      }

      .video-facade:hover .video-play,
      .video-facade:focus-visible .video-play {
        transform: translate(-50%, -50%) scale(1.1);
      }

      @media (prefers-reduced-motion: reduce) {
        .video-play,
        .video-facade::after {
          transition: none;
        }
      }
    `
  ]
})
export class VideoComponent {
  readonly videoId = input.required<string>();
  readonly title = input<string>('Video');
  /** Optional start time in seconds. */
  readonly start = input<number | null>(null);

  protected readonly loaded = signal(false);

  protected readonly thumbUrl = computed(
    () => `https://i.ytimg.com/vi/${this.videoId()}/hqdefault.jpg`
  );

  protected readonly embedUrl = computed<SafeResourceUrl>(() => {
    const startParam = this.start() ? `&start=${this.start()}` : '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&rel=0${startParam}`
    );
  });

  constructor(private readonly sanitizer: DomSanitizer) {}

  protected play(): void {
    this.loaded.set(true);
  }
}
