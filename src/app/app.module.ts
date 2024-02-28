import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { LoaderModule } from './core/loader/loader.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/loader/interceptor/loading.interceptor';
import { LoaderService } from './core/loader/services/loader.service';
import { LOADER_PROVIDER_INTERCEPTOR } from './core/loader/loader.provider';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgApexchartsModule,
    //LoaderModule,
    //LayoutModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...LOADER_PROVIDER_INTERCEPTOR
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
