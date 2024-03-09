import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SettingsRoutes } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    SettingsRoutes,
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
