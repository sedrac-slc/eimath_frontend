import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseTokenUser } from '../model/responseTokenUser.model';
import { LinkUtil } from '../utils/link.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private link : LinkUtil) { }

  public registerAuth(form: FormGroup) {
    return this.httpClient.post<ResponseTokenUser>(this.link.api_register, JSON.stringify(form.value),{
      headers: { 'Content-Type': 'application/json'}
    });
  }

}
