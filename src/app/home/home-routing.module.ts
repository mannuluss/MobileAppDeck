import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './page/home.page';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
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
        path: 'datos',
        loadChildren: () =>
          import('./info-basica/info-basica.module').then(
            (m) => m.InfoBasicaModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
