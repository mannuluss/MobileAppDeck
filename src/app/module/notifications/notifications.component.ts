import { Component, OnInit } from '@angular/core';
import { NotificationStructure } from './interfaces/notificationStructure';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  listNotifications: NotificationStructure[] = [
    {
      title: 'Notification 1',
      description:
        'Informacion sobre la notificacion, el mensaje que llego es el siguiente.',
      date: new Date('2024-01-01'),
      read: false,
    },
    {
      title: 'Notification 2',
      description:
        'Informacion sobre la notificacion, el mensaje que llego es el siguiente.',
      date: new Date('2024/01/05'),
      icon: 'star',
      read: true,
    }
  ];

  constructor() {}

  ngOnInit() {}
}
