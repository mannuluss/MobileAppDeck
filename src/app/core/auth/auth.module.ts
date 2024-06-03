import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthKeycloakService } from './services/AuthKeycloakLocal.service';

@NgModule({
  imports: [CommonModule,],
  declarations: [],
  providers: [AuthKeycloakService],
})
export class AuthModule {}
