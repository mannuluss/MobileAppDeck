import { Routes, RouterModule } from '@angular/router';
import { ListPagesComponent } from './list-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ListPagesComponent,
  },
];

export const ListPagesRoutes = RouterModule.forChild(routes);
