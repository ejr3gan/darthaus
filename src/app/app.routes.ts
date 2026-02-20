import { Routes } from '@angular/router';
import { FeatureComponent } from './pages/feature/feature.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'The Dart Haus'
  },
  {
    path: 'try-before-you-buy',
    component: FeatureComponent,
    title: 'Try Before You Buy - The Dart Haus',
    data: {
      featureTitle: 'Try Before You Buy',
      featureSubtitle: 'Dial in the right darts before you commit.',
      featureBody: 'Test different weights, barrels, and flights on our setup wall. We will help you feel the difference and find the right balance for your throw.'
    }
  },
  {
    path: 'junior-tutoring',
    component: FeatureComponent,
    title: 'Junior Tutoring - The Dart Haus',
    data: {
      featureTitle: 'Junior Tutoring',
      featureSubtitle: 'Coaching that makes young players feel confident.',
      featureBody: 'Structured sessions for juniors focusing on stance, grip, and rhythm. Perfect for new players or future league stars.'
    }
  },
  {
    path: 'repointing-refurb',
    component: FeatureComponent,
    title: 'Repointing & Refurb - The Dart Haus',
    data: {
      featureTitle: 'Repointing & Refurb',
      featureSubtitle: 'Keep your darts sharp and match-ready.',
      featureBody: 'We offer repointing, grip refreshes, and full refurb services to keep your setup consistent and tournament-ready.'
    }
  },
  {
    path: 'expert-advice',
    component: FeatureComponent,
    title: 'Expert Advice - The Dart Haus',
    data: {
      featureTitle: 'Expert Advice',
      featureSubtitle: 'Real guidance from people who play.',
      featureBody: 'Get help with form, setup tweaks, and equipment choices. No sales pressure, just honest advice.'
    }
  },
  {
    path: 'quality-gear',
    component: FeatureComponent,
    title: 'Quality Gear - The Dart Haus',
    data: {
      featureTitle: 'Quality Gear',
      featureSubtitle: 'Premium darts and accessories, curated for feel.',
      featureBody: 'We stock proven brands and the right accessories to help you dial in the perfect setup.'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
