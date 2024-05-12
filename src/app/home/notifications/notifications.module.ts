import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationsRoutes } from './notifications.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, NotificationsRoutes],
  declarations: [NotificationsComponent],
})
export class NotificationsModule {}
