import { provideRouter, RouterConfig } from '@angular/router';
import { ResourceListComponent } from './resources/resource-list.component';
import { ResourceDetailComponent } from './resources/resource-detail.component';
import { DefaultComponent } from './default/default.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/resources',
    pathMatch: 'full'
  },
  { path: 'resources', component: ResourceListComponent },
  { path: 'resource/:id', component: ResourceDetailComponent },
  { path : '**', component : DefaultComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
