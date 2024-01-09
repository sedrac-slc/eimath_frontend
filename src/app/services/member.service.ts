import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberPage } from '../model/memberPage.model';
import { GuardService } from './guard.service';
import { LinkUtil } from '../utils/link.util';
import { Member } from '../model/member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

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

  public findAllByGroup(uuid: string): Observable<MemberPage>{
    return this.httpClient.get<MemberPage>(`${this.link.api_members_by_group}?group=${uuid}`,{
       headers: this.httpHeaders
     });
  }

  public pagefindAllByGroup(uuid: string, page: number = 0): Observable<MemberPage>{
    return this.httpClient.get<MemberPage>(`${this.link.api_members_by_group}?group=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

  public delete(member: Member): Observable<void>{
    return this.httpClient.delete<void>(`${this.link.api_members}/${member.id}`,{
       headers: this.httpHeaders
     });
  }

}
