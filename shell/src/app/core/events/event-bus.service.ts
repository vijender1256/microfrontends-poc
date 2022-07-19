import { Injectable } from '@angular/core';
import { EventWindow } from './event-window';
import { Router } from '@angular/router';
import { NotificationService } from '../notifications/notification.service';
import Eev from 'eev';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  constructor(private readonly router: Router, private readonly notificationService: NotificationService) { }

  initializeEventBus() {
    const eventWindow = window as EventWindow & typeof globalThis;
    if (!eventWindow.eventBus) {
      eventWindow.eventBus = new Eev();
    }

    eventWindow.notificationService = this.notificationService;
    eventWindow.router = this.router //set up the Eev listners
    eventWindow.eventBus.on('notificationSuccess', function (data) {
      eventWindow.notificationService.success(data?.message);
    });
    eventWindow.eventBus.on('notificationError', function (data) {
      eventWindow.notificationService.error(data?.message);
    });
    eventWindow.eventBus.on('notificationWarning', function (data) {
      eventWindow.notificationService.warn(data?.message);
    });
    //we can use the the event bus notifications for routing as well if needed from MFE to shell communicaiton.
    eventWindow.eventBus.on('route', function (data) {
      eventWindow.router.navigate([data?.message]);
    });
  }
}
