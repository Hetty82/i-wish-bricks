import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
import { SetsComponent } from './sets/sets.component';

export const routes: Routes = [
  {
    path: 'sets',
    component: SetsComponent,
    title: 'Lego sets list page',
  },
  {
    path: '',
    redirectTo: '/sets',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page not found',
  },
];
