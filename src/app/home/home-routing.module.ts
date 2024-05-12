import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./list-pages/list-pages.module').then(
            (m) => m.ListPagesModule
          ),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('./select-app/select-app.module').then(
            (m) => m.SelectAppModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
