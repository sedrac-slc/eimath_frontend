import { Component, ViewEncapsulation } from '@angular/core';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {

  constructor(
    protected contentId: ContentIdUtil,
    protected constante: ConstantUtil,
    protected link: LinkUtil,
    protected navigator: NavigatorService,
    protected language: LanguageService,
    protected guardaService: GuardService
  ){
    this.fullHeight();
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
