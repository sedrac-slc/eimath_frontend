import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuardService } from './guard.service';
import { LinkUtil } from '../utils/link.util';
import { Convit } from '../model/convit.model';
import { Observable } from 'rxjs';
import { ConvitPage } from '../model/convitPage.model';

@Injectable({
  providedIn: 'root'
})
export class ConvitsService {

  private httpHeaders: HttpHeaders;

  constructor(
    private httpClient : HttpClient,
    private guardService: GuardService,
    private link: LinkUtil
  ) {
    this.httpHeaders = this.guardService.confirmedPerson()
    ? new HttpHeaders({ 'Content-Type': 'application/json',  Authorization: `Bearer ${this.guardService.responseTokenUser().token}`
    }) : new HttpHeaders({ 'Content-Type': 'application/json'});
  }

  public save(convit: Convit): Observable<Convit>{
    return this.httpClient.post<Convit>(`${this.link.api_convits}`,convit,{
       headers: this.httpHeaders
     });
  }

  public findAllByUserId(uuid: string): Observable<ConvitPage>{
    return this.httpClient.get<ConvitPage>(`${this.link.api_convits}/by-people?people=${uuid}`,{
       headers: this.httpHeaders
     });
  }

  public pagefindAllByUserId(uuid: string, page: number = 0): Observable<ConvitPage>{
    return this.httpClient.get<ConvitPage>(`${this.link.api_convits}/by-people?people=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

  public delete(convit: Convit): Observable<void>{
    return this.httpClient.delete<void>(`${this.link.api_convits}/${convit.id}`,{
       headers: this.httpHeaders
     });
  }

  public acceptConvite(convit: Convit): Observable<void>{
    return this.httpClient.post<void>(`${this.link.api_convits}/accept`,convit,{
       headers: this.httpHeaders
     });
  }


}
