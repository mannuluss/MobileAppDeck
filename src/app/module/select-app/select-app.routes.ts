import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrapingComponent } from './scraping/scraping.component';
import { SelectAppComponent } from './page/select-app.component';
import { GithubApplicationsUpdaterComponent } from './components/github-applications-updater/github-applications-updater.component';
import { AppDescriptionComponent } from './components/app-description/app-description.component';

const routes: Routes = [
  {
    path: '',
    component: SelectAppComponent,
  },
  { path: 'scraping', component: ScrapingComponent },
  {
    path: 'updater',
    component: GithubApplicationsUpdaterComponent,
    children: [
      {
        path: 'description',
        component: AppDescriptionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBasicaRoutingModule {}
