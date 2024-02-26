import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { ImageUtil } from 'src/app/utils/image.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  @Input() back: string = "";
  @Input() detailsUser: boolean = true;

  person: UserPeople;

  constructor(
    protected contentId: ContentIdUtil,
    protected constante: ConstantUtil,
    protected link: LinkUtil,
    protected image: ImageUtil,
    protected navigator: NavigatorService,
    protected language: LanguageService,
    protected guardaService: GuardService
  ){
    this.fullHeight();
    this.person = this.guardaService.responseTokenUser().person;
  }

  private changeHeight(cls: string){
    const jsFullheight = document.querySelectorAll(cls);
    if(jsFullheight) jsFullheight.forEach( item => item.setAttribute("height", window.innerHeight+"px") )
  }

  private fullHeight(): void{
    const cls = ".js-fullheight";
    this.changeHeight(cls);
    window.addEventListener('resize',(_)=> this.changeHeight(cls))
  }

  private toogle(id: string, cls: string): void{
    const element = document.querySelector("#"+id);
    if(element) element.classList.toggle(cls);
  }

  toogleSidebarCollapse(): void{
    this.toogle("sidebar","active");
  }

  toogleDropDown(id: string): void{
    this.toogle(id,"show");
  }

}

