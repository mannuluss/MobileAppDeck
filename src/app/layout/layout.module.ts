import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './page/layout.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LoaderModule } from '@core/loader/loader.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LayoutRoutingModule,
    LoaderModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
