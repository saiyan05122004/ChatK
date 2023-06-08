import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  template: `
    <div *ngFor="let message of messages">
      {{ message }}
    </div>
  `,
})
export class MessageListComponent {
  messages = ['Hello', 'Hi'];
}