import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LinkUtil } from '../utils/link.util';
import { ConstantUtil } from '../utils/constant.util';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {


  constructor(private router: Router, private link: LinkUtil, private constant: ConstantUtil){

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

  studyGroupFromMembers(event: Event,view: string, groupId: string, type: string ): void {
    event.preventDefault();
    switch(type){
      case this.constant.group_maneger:
      case this.constant.group_participation:
        let url : string = '/'+this.link.study_group+'/'+view;
        this.router.navigate([url, groupId, type]);
        break;
      default:
      this.dashboardRedirect();
    }

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
