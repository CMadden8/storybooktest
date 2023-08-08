import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ui-test',
  },
  {
    path: 'ui-test',
    loadComponent: () => import('@org/my-app/ui').then((c) => c.UiComponent),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
