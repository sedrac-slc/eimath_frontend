import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyGroupPage } from '../model/grupoPage.model';
import { GuardService } from './guard.service';
import { LinkUtil } from '../utils/link.util';
import { FormGroup } from '@angular/forms';
import { Group } from '../model/grupo.model';

@Injectable({
  providedIn: 'root'
})
export class StudyGroupService {

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


  public findAll(uuid: string): Observable<StudyGroupPage>{
   return this.httpClient.get<StudyGroupPage>(`${this.link.api_study_group_find_all}?people=${uuid}`,{
      headers: this.httpHeaders
    });
  }

  public findAllMember(uuid: string): Observable<StudyGroupPage>{
    return this.httpClient.get<StudyGroupPage>(`${this.link.api_study_group_find_all}/members?people=${uuid}`,{
       headers: this.httpHeaders
     });
   }

  public pageGroupsByUserId(uuid: string, page: number = 0): Observable<StudyGroupPage>{
    return this.httpClient.get<StudyGroupPage>(`${this.link.api_study_group_find_all}?people=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

  public pageGroupsMemberByUserId(uuid: string, page: number = 0): Observable<StudyGroupPage>{
    return this.httpClient.get<StudyGroupPage>(`${this.link.api_study_group_find_all}/members?people=${uuid}&page=${page}`,{
      headers: this.httpHeaders
    });
  }

  public save(form: FormGroup): Observable<Group>{
    return this.httpClient.post<Group>(`${this.link.api_study_group}`,form.value,{
       headers: this.httpHeaders
     });
  }

  public update(form: FormGroup): Observable<Group>{
    return this.httpClient.put<Group>(`${this.link.api_study_group}`,form.value,{
       headers: this.httpHeaders
     });
  }

  public delete(group: Group): Observable<void>{
    return this.httpClient.delete<void>(`${this.link.api_study_group}/${group.id}`,{
       headers: this.httpHeaders
     });
  }


}
