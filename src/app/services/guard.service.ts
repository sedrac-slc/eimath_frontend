import { Injectable } from '@angular/core';
import { ResponseTokenUser } from '../model/responseTokenUser.model';
import { Router } from '@angular/router';
import { LinkUtil } from '../utils/link.util';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  lang: String = "en";
  static PERSON: string = "person";
  static JSON_DEFAULT: string = '{"token":null,"person":null,"exist":false}';

  constructor(private router: Router, private link: LinkUtil) { }

  savePersonInLocalStorage(resp: ResponseTokenUser) {
    let json =  JSON.stringify(resp);
    localStorage.setItem(GuardService.PERSON, json);
  }

  existPersonInLocalStorage(): boolean{
    return localStorage.getItem(GuardService.PERSON) !== undefined;
  }

  confirmedPerson(): boolean{
    if(!this.existPersonInLocalStorage()) return false;
    const str = localStorage.getItem(GuardService.PERSON) ?? GuardService.JSON_DEFAULT;
    const obj = JSON.parse(str);
    return obj.exist
  }

  responseTokenUser(): ResponseTokenUser{
    const str = localStorage.getItem(GuardService.PERSON) ?? GuardService.JSON_DEFAULT;
    const obj : ResponseTokenUser = JSON.parse(str);
    return obj;
  }

  redirectDashboard(){
    this.router.navigate([this.link.math]);
  }

  logaut(){
    localStorage.removeItem(GuardService.PERSON);
  }

}
