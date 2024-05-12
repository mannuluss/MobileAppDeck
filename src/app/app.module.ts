import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderModule } from '@core/loader/loader.module';
import { LOADER_PROVIDER_INTERCEPTOR } from './core/loader/loader.provider';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LayoutModule } from './layout/layout.module';
import { KeycloakAngularModule } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { authOpenIdInterceptorProviders } from '@core/auth/interceptor/auth.openid.interceptor';
import { authRouteProviders } from '@core/auth/services/auth.route.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({}),
    AppRoutingModule,
    NgApexchartsModule,
    LayoutModule,
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
