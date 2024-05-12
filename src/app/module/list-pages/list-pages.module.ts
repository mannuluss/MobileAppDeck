import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPagesComponent } from './list-pages.component';
import { ListPagesRoutes } from './list-pages.routing';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonSearchbar,
  IonContent
} from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    ListPagesRoutes,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonContent
  ],
  declarations: [ListPagesComponent],
})
export class ListPagesModule {}
