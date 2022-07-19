import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class IncrementerService {

  constructor(private notificationService: NotificationService) { }

  broadcastCount(value: number): void {
    const eventData = {
      counter: value,
    };
    const event = new CustomEvent('clean-counter', {
      detail: eventData,
      bubbles: true
    });
    dispatchEvent(event);

    this.notificationService.emitEvent(
      'notificationSuccess',
      'Counter Incremented from Micro Frontend'
    );
  }

  broadcastSuccess(): void {
    this.notificationService.notificationSuccess(
      'Success Notification from Micro Frontend'
    );
  }

  broadcastError(): void {
    this.notificationService.notificationError(
      'Error Notification from  Micro Frontend'
    );
  }

  broadcastWarning(): void {
    this.notificationService.notificationWarning(
      'Warning Notification from Micro Frontend'
    );
  }

}
