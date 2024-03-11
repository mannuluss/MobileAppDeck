import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SettingsRoutes } from './settings.routing';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutes,
    IonButton,
    IonIcon,
    NgApexchartsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
