import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { LoaderModule } from '../core/loader/loader.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, IonicModule, LoaderModule],
  providers: [],
})
export class LayoutModule {}
