import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket(){
    const url = `${environment.API_URL}:3000/chat-socket`;
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string){
    this.stompClient.connect({},() =>{
      this.stompClient.subscribe(`/topic/${roomId}`,(messages: any)=>{
        const messageContent = JSON.parse(messages.body);
        console.log(messageContent)
      })
    })
  }

  sendRoom(roomId: string, message: Message){
    this.stompClient.send(`/app/chat/${roomId}`,{},JSON.stringify(message));
  }

}
