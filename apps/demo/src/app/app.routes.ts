import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/showcase',
    pathMatch: 'full',
  },
  {
    path: 'showcase',
    loadComponent: () =>
      import('./pages/showcase/showcase.component').then((m) => m.ShowcaseComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'marketing',
    loadComponent: () =>
      import('./pages/marketing/marketing.component').then((m) => m.MarketingComponent),
  },
  {
    path: 'docs',
    loadComponent: () => import('./pages/docs/docs.component').then((m) => m.DocsComponent),
  },
];
