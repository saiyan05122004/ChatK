import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// Добавлено объявление компонента MessageListComponent:
import { ChatPageRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.page';
import { MessageListComponent}  from './message-list.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule
  ],
  declarations: [ChatPage, MessageListComponent] // Добавлено объявление компонента в список деклараций модуля.
})
export class ChatPageModule {}