import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagePage } from '../model/messagePage.model';
import { GuardService } from './guard.service';
import { LinkUtil } from '../utils/link.util';
import { Message } from '../model/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private httpHeaders: HttpHeaders;

  constructor(
    private httpClient: HttpClient,
    private guardService: GuardService,
    private link: LinkUtil
  ) {
    this.httpHeaders = this.guardService.confirmedPerson()
     ? new HttpHeaders({ 'Content-Type': 'application/json',  Authorization: `Bearer ${this.guardService.responseTokenUser().token}`
    }) : new HttpHeaders({ 'Content-Type': 'application/json'});
  }

  public findAllByGroup(uuid: string): Observable<MessagePage>{
    return this.httpClient.get<MessagePage>(`${this.link.api_messages_by_group}?group=${uuid}`,{
       headers: this.httpHeaders
     });
  }

  public pagefindAllByGroup(uuid: string, page: number = 0): Observable<MessagePage>{
    return this.httpClient.get<MessagePage>(`${this.link.api_messages_by_group}?group=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

  public delete(message: Message): Observable<void>{
    return this.httpClient.delete<void>(`${this.link.api_messages}/${message.id}`,{
       headers: this.httpHeaders
     });
  }

  public save(message: Message): Observable<Message>{
    return this.httpClient.post<Message>(`${this.link.api_messages}`,message,{
       headers: this.httpHeaders
     });
  }


}
