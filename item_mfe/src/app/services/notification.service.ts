import { Injectable } from '@angular/core';
import { AppShellWindow } from '../models/app-shell-window';
import { EventsType } from '../models/event-bus-events-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private appShellWindow = window as AppShellWindow & typeof globalThis;
  constructor() { }

  emitEvent(eventType: EventsType, message: string): void {
    if (!this.appShellWindow.eventBus) {
      console.error('Event Bus does not exist');
      return;
    }
    this.appShellWindow.eventBus.emit(eventType, { message });
  }

  notificationError(message: string): void {
    this.emitEvent('notificationError', message);
  }
  notificationSuccess(message: string): void {
    this.emitEvent('notificationSuccess', message);
  }
  notificationWarning(message: string): void {
    this.emitEvent('notificationWarning', message);
  }
}
