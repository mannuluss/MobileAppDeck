import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../module/list-pages/list-pages.module').then(
            (m) => m.ListPagesModule
          ),
      },
      {
        path: 'applications',
        loadChildren: () =>
          import('../module/select-app/select-app.module').then(
            (m) => m.SelectAppModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../module/settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
