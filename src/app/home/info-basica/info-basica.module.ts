import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBasicaComponent } from './info-basica.component';
import { InfoBasicaRoutingModule } from './info-basica.routes';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IonTextarea } from '@ionic/angular/standalone';
import { FileChooserModule } from '@core/fileChooser/fileChooser.module';

@NgModule({
  declarations: [InfoBasicaComponent],
  imports: [
    CommonModule,
    InfoBasicaRoutingModule,
    FileChooserModule,
    IonTextarea,
  ],
})
export class InfoBasicaModule {}
