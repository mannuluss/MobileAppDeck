import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SettingsRoutes } from './settings.routing';
import {
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonLabel,
  IonNote,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRouterOutlet,
} from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutes,
    IonRouterOutlet,
    IonButton,
    IonIcon,
    IonItem,
    IonList,
    IonLabel,
    IonNote,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NgApexchartsModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
