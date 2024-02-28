import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBasicaComponent } from './info-basica.component';
import { InfoBasicaRoutingModule } from './info-basica.routes';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FileChooserComponent } from 'src/app/core/fileChooser/fileChooser.component';

@NgModule({
  declarations: [InfoBasicaComponent],
  imports: [
    CommonModule,
    InfoBasicaRoutingModule,
    NgApexchartsModule,
    FileChooserComponent,
  ],
})
export class InfoBasicaModule {}
