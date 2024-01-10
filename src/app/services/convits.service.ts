import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GuardService } from './guard.service';
import { LinkUtil } from '../utils/link.util';
import { Convit } from '../model/convit.model';
import { Observable } from 'rxjs';

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


}
