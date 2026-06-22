import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VideoComponent } from '../../components/video/video.component';

interface ServiceLink {
  path: string;
  title: string;
}

interface FeatureImage {
  src: string;
  alt: string;
}

interface FeatureVideo {
  id: string;
  title: string;
}

const ALL_SERVICES: ServiceLink[] = [
  { path: '/try-before-you-buy', title: 'Try Before You Buy' },
  { path: '/junior-tutoring', title: 'Junior Tutoring' },
  { path: '/repointing-refurb', title: 'Repointing & Refurb' },
  { path: '/expert-advice', title: 'Expert Advice' },
  { path: '/quality-gear', title: 'Quality Gear' }
];

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [RouterLink, VideoComponent],
  template: `
    <section class="page feature-page">
      <div class="container">
        <nav class="feature-breadcrumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <span aria-hidden="true">/</span>
          <span class="current">{{ featureTitle }}</span>
        </nav>

        <header class="feature-hero fade-up" [class.has-media]="heroImage">
          <div class="feature-hero-copy">
            <div class="eyebrow">The Dart Haus • Ross-on-Wye</div>
            <h1 class="hero-title">{{ featureTitle }}</h1>
            <p class="hero-subtitle">{{ featureSubtitle }}</p>
            <p class="hero-body">{{ featureBody }}</p>
            <div class="cta-group mt-3">
              <a class="btn btn-brand" href="tel:07877254974">Call to book</a>
              <a class="btn btn-find" href="mailto:thedarthaus26@outlook.com">Email us</a>
              <a class="btn btn-ghost" routerLink="/">Back to home</a>
            </div>
          </div>
          @if (heroImage) {
            <div class="feature-hero-media">
              <img [src]="heroImage.src" [alt]="heroImage.alt">
            </div>
          }
        </header>

        @if (highlights.length) {
          <section class="feature-highlights fade-up stagger-1" aria-label="What to expect">
            <h2>What to expect</h2>
            <ul>
              @for (item of highlights; track item) {
                <li>
                  <i class="fa-solid fa-check" aria-hidden="true"></i>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </section>
        }

        @if (video) {
          <section class="feature-video fade-up stagger-1" aria-label="Watch">
            <h2>Watch</h2>
            <app-video [videoId]="video.id" [title]="video.title" />
          </section>
        }

        @if (showBrandsStock) {
          <div class="meta-card brands-stock fade-up stagger-1" aria-label="Brands we stock">
            <div class="meta-label">Brands we stock</div>
            <div class="brand-grid">
              <img src="assets/target_darts_logo.jpg" alt="Target Darts logo" loading="lazy">
              <img src="assets/unicorn_darts_logo.png" alt="Unicorn Darts logo" loading="lazy">
              <img src="assets/shot_darts_logo.jpg" alt="Shot Darts logo" loading="lazy">
              <img src="assets/harrows_darts_logo.png" alt="Harrows Darts logo" loading="lazy">
              <img src="assets/target_japan_darts_logo.png" alt="Target Japan Darts logo" loading="lazy">
              <img src="assets/mission_darts_logo.png" alt="Mission Darts logo" loading="lazy">
            </div>
            <p class="brand-note">These are just a few of the brands we stock. New lines arrive all the time.</p>
          </div>
        }

        @if (gallery.length) {
          <section class="feature-gallery fade-up stagger-1" aria-label="A look at the range">
            <h2>A look at the range</h2>
            <div class="gallery-grid">
              @for (img of gallery; track img.src) {
                <img [src]="img.src" [alt]="img.alt" loading="lazy">
              }
            </div>
          </section>
        }

        <section class="related-services fade-up stagger-2" aria-label="Explore more services">
          <h2>Explore more</h2>
          <div class="related-grid">
            @for (svc of relatedServices; track svc.path) {
              <a class="related-card" [routerLink]="svc.path">
                <span>{{ svc.title }}</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            }
          </div>
        </section>
      </div>
    </section>
  `
})
export class FeatureComponent {
  protected readonly featureTitle: string;
  protected readonly featureSubtitle: string;
  protected readonly featureBody: string;
  protected readonly highlights: string[];
  protected readonly heroImage: FeatureImage | null;
  protected readonly gallery: FeatureImage[];
  protected readonly video: FeatureVideo | null;
  protected readonly showBrandsStock: boolean;
  protected readonly relatedServices: ServiceLink[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly meta: Meta
  ) {
    const data = this.route.snapshot.data;
    this.featureTitle = data['featureTitle'] ?? 'Feature';
    this.featureSubtitle = data['featureSubtitle'] ?? 'Details coming soon.';
    this.featureBody = data['featureBody'] ?? 'We are building this page now.';
    this.highlights = data['highlights'] ?? [];
    this.heroImage = data['heroImage'] ?? null;
    this.gallery = data['gallery'] ?? [];
    this.video = data['video'] ?? null;

    const currentPath = this.route.snapshot.routeConfig?.path ?? '';
    this.showBrandsStock = currentPath === 'quality-gear';
    this.relatedServices = ALL_SERVICES.filter((svc) => svc.path !== `/${currentPath}`);

    const description = data['metaDescription'] ?? this.featureBody;
    this.meta.updateTag({ name: 'description', content: description });
  }
}
