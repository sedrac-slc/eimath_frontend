import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseTokenUser } from '../model/responseTokenUser.model';
import { LinkUtil } from '../utils/link.util';
import { UserPeople } from '../model/userPeople.model';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpHeaders: HttpHeaders;

  constructor(
    private link : LinkUtil,
    private httpClient: HttpClient,
    private guardService: GuardService
  ) {
    this.httpHeaders = this.guardService.confirmedPerson()
      ? new HttpHeaders({ 'Content-Type': 'application/json',  Authorization: `Bearer ${this.guardService.responseTokenUser().token}`})
      : new HttpHeaders({ 'Content-Type': 'application/json'});
  }

  public registerAuth(form: FormGroup) {
    return this.httpClient.post<ResponseTokenUser>(this.link.api_register, JSON.stringify(form.value),{
      headers: { 'Content-Type': 'application/json'}
    });
  }

  public updateAuth(form: FormGroup) {
    return this.httpClient.put<UserPeople>(this.link.api_users, form.value, {
      headers: this.httpHeaders
    });
  }

  public updatePassowrdAuth(form: FormGroup) {
    return this.httpClient.put<void>(this.link.api_users_password_update, JSON.stringify(form.value),{
      headers: this.httpHeaders
    });
  }

  public updateImagemAuth(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name)
    const httpRequest = new HttpRequest("POST", this.link.api_user_image, formData, {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
    });
    return this.httpClient.request(httpRequest);
  }

}
