import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapingComponent } from './scraping/scraping.component';
import { InfoBasicaRoutingModule } from './select-app.routes';
import { FileChooserModule } from '@core/fileChooser/fileChooser.module';
import { SelectAppComponent } from './page/select-app.component';
import { GithubApplicationsUpdaterComponent } from './components/github-applications-updater/github-applications-updater.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SelectAppComponent,
    ScrapingComponent,
    GithubApplicationsUpdaterComponent,
  ],
  imports: [
    CommonModule,
    InfoBasicaRoutingModule,
    FileChooserModule,
    IonicModule,
  ],
})
export class SelectAppModule {}
