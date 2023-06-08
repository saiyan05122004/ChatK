import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
})
export class ChatPage {

  messageText = '';
  loadingMessages = false;
  errorMessage = '';

  constructor() {}

 sendMessage() {
   // реализуйте логику отправки нового сообщения здесь
   
   // сбросить поле ввода
   this.messageText = '';
 }
}