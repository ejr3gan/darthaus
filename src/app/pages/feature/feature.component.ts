import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page feature-page">
      <div class="container">
        <div class="feature-hero">
          <div>
            <div class="eyebrow">Feature</div>
            <h1 class="hero-title">{{ featureTitle }}</h1>
            <p class="hero-subtitle">{{ featureSubtitle }}</p>
            <p class="hero-body">{{ featureBody }}</p>
            <div class="cta-group">
              <a class="btn btn-ghost" routerLink="/">Back to home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeatureComponent {
  protected readonly featureTitle: string;
  protected readonly featureSubtitle: string;
  protected readonly featureBody: string;

  constructor(private readonly route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.featureTitle = data['featureTitle'] ?? 'Feature';
    this.featureSubtitle = data['featureSubtitle'] ?? 'Details coming soon.';
    this.featureBody = data['featureBody'] ?? 'We are building this page now.';
  }
}
