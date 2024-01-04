import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseTokenUser } from '../model/responseTokenUser.model';
import { LinkUtil } from '../utils/link.util';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  redirect: boolean = true;

  constructor(private httpClient: HttpClient, private link : LinkUtil) {

  }

  public auth(form: FormGroup){
    return this.httpClient.post<ResponseTokenUser>(this.link.api_login, JSON.stringify(form.value),{
      headers: { 'Content-Type': 'application/json'}
    });
  }



}
