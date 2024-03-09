import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    KeycloakService
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class LoginModule {}
