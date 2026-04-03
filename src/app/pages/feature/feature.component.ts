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
            <h1 class="hero-title">{{ featureTitle }}</h1>
            <p class="hero-subtitle">{{ featureSubtitle }}</p>
            <p class="hero-body">{{ featureBody }}</p>
            @if (showBrandsStock) {
              <div class="meta-card brands-stock mt-4" aria-label="Brands we stock">
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
            <div class="cta-group mt-3">
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
  protected readonly showBrandsStock: boolean;

  constructor(private readonly route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    this.featureTitle = data['featureTitle'] ?? 'Feature';
    this.featureSubtitle = data['featureSubtitle'] ?? 'Details coming soon.';
    this.featureBody = data['featureBody'] ?? 'We are building this page now.';
    this.showBrandsStock = this.route.snapshot.routeConfig?.path === 'quality-gear';
  }
}
