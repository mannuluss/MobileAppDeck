import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './page/home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoaderModule } from '../core/loader/loader.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LoaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
