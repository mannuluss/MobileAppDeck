import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
  },
];

export const NotificationsRoutes = RouterModule.forChild(routes);
