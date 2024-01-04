import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LinkUtil } from '../utils/link.util';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {


  constructor(private router: Router, private link: LinkUtil){

  }

  fromEvent(view: string, event: Event): void {
    event.preventDefault()
    this.from(view);
  }

  from(view: string): void {
    this.router.navigate([view]);
  }

  studyGroupFromEvent(view: string, event: Event): void {
    let url : string = '/'+this.link.study_group+'/'+view;
    this.fromEvent(url,event);
  }

  mathFromEvent(view: string, event: Event): void {
    let url : string = '/'+this.link.math+'/'+view;
    this.fromEvent(url,event);
  }

  loginRedirect(){
    this.from(this.link.public_login);
  }

  dashboardRedirect(){
    this.from(this.link.math);
  }


}
