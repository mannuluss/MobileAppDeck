import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { IonButton, IonLabel, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
