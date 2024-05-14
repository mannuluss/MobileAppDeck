import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LOADER_PROVIDER_INTERCEPTOR } from './core/loader/loader.provider';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { authOpenIdInterceptorProviders } from '@core/auth/interceptor/auth.openid.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '@core/i18n/translate.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',//TODO: ES NECESARIO UN SERVICIO QUE DETECTE EL IDIOMA DEL SISTEMA Y LO ASIGNE AL TRANSLATE MODULE
    }),
    IonicModule.forRoot({}),
    AppRoutingModule,
    NgApexchartsModule,
    //LayoutModule,
    //LoaderModule,
    //LayoutModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...LOADER_PROVIDER_INTERCEPTOR,
    authOpenIdInterceptorProviders,
    //...authRouteProviders,
    //initKeycloakProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
