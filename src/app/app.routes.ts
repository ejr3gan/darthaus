import { Routes } from '@angular/router';
import { FeatureComponent } from './pages/feature/feature.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'The Dart Haus | Darts Shop & Coaching in Ross-on-Wye'
  },
  {
    path: 'try-before-you-buy',
    component: FeatureComponent,
    title: 'Try Before You Buy - The Dart Haus',
    data: {
      featureTitle: 'Try Before You Buy',
      featureSubtitle: 'Dial in the right darts before you commit.',
      featureBody:
        'Test different weights, barrels, and flights on our setup wall. We will help you feel the difference and find the right balance for your throw.',
      metaDescription:
        'Try darts before you buy at The Dart Haus in Ross-on-Wye. Test weights, barrels, and flights on our practice oches with hands-on guidance.',
      highlights: [
        'Throw test darts across a range of weights, barrels, and grips',
        'Compare flights and stems to see what suits your release',
        'Hands-on guidance to match a setup to your throw',
        'No pressure to buy — take your time on the oche'
      ],
      heroImage: {
        src: 'assets/set-up-wall.webp',
        alt: 'Practice oches and wall-mounted dartboards inside The Dart Haus'
      }
    }
  },
  {
    path: 'junior-tutoring',
    component: FeatureComponent,
    title: 'Junior Tutoring - The Dart Haus',
    data: {
      featureTitle: 'Junior Tutoring',
      featureSubtitle: 'Coaching that makes young players feel confident.',
      featureBody:
        'Structured sessions for juniors focusing on stance, grip, and rhythm. Perfect for new players or future league stars.',
      metaDescription:
        'Junior darts coaching in Ross-on-Wye. Friendly, structured sessions on stance, grip, and rhythm for new and aspiring young players.',
      highlights: [
        'Structured sessions covering stance, grip, and rhythm',
        'Friendly, patient coaching for all abilities',
        'Great for newcomers and aspiring league players',
        'Build good habits early in a relaxed setting'
      ]
    }
  },
  {
    path: 'repointing-refurb',
    component: FeatureComponent,
    title: 'Repointing & Refurb - The Dart Haus',
    data: {
      featureTitle: 'Repointing & Refurb',
      featureSubtitle: 'Keep your darts sharp and match-ready.',
      featureBody:
        'We offer repointing, grip refreshes, and full refurb services to keep your setup consistent and tournament-ready.',
      metaDescription:
        'Dart repointing, grip refreshes, and full refurbishment at The Dart Haus, Ross-on-Wye. Keep your setup sharp, consistent, and match-ready.',
      highlights: [
        'Professional repointing for steel-tip darts',
        'Grip refreshes to restore feel and control',
        'Full refurbishment to bring tired darts back to life',
        'Keep your setup consistent season after season'
      ]
    }
  },
  {
    path: 'expert-advice',
    component: FeatureComponent,
    title: 'Expert Advice - The Dart Haus',
    data: {
      featureTitle: 'Expert Advice',
      featureSubtitle: 'Real guidance from people who play.',
      featureBody:
        'Get help with form, setup tweaks, and equipment choices. No sales pressure, just honest advice.',
      metaDescription:
        'Honest darts advice from people who play. Get help with form, setup tweaks, and equipment choices at The Dart Haus in Ross-on-Wye.',
      highlights: [
        'Honest help with form, setup tweaks, and equipment',
        'Recommendations based on your throw, not sales targets',
        'Talk through barrels, flights, stems, and points',
        'Friendly faces who actually play the game'
      ]
    }
  },
  {
    path: 'quality-gear',
    component: FeatureComponent,
    title: 'Quality Gear - The Dart Haus',
    data: {
      featureTitle: 'Quality Gear',
      featureSubtitle: 'Premium darts and accessories, curated for feel.',
      featureBody:
        'We stock proven brands and the right accessories to help you dial in the perfect setup — including an extensive second-hand range alongside brand-new darts.',
      metaDescription:
        'New and second-hand darts and accessories from Target, Unicorn, Harrows, Shot, and Mission. An extensive curated range at The Dart Haus in Ross-on-Wye.',
      highlights: [
        'An extensive second-hand range alongside brand-new darts',
        'Curated darts from trusted, proven brands',
        'Flights, stems, points, and cases to complete your kit',
        'New lines arriving all the time'
      ],
      heroImage: {
        src: 'assets/gear-1.webp',
        alt: 'Display cabinet of boxed darts at The Dart Haus'
      },
      gallery: [
        { src: 'assets/gear-2.webp', alt: 'Wall of dart accessories — flights, stems, and points' },
        { src: 'assets/gear-3.webp', alt: 'Glass cabinet of premium dart sets' },
        { src: 'assets/gear-4.webp', alt: 'Boxed darts on display at The Dart Haus' }
      ]
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
