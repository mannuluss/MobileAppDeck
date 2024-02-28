import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloqueadorComponent } from './components/bloqueador/bloqueador.component';
import {
  IonAlert,
  IonModal,
  IonHeader,
  IonProgressBar,
} from '@ionic/angular/standalone';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [BloqueadorComponent, LoaderComponent],
  exports: [LoaderComponent],
  imports: [
    CommonModule,
    IonAlert,
    IonModal,
    IonHeader,
    IonProgressBar,
  ],
  providers: [LoaderService],
})
export class LoaderModule {}
