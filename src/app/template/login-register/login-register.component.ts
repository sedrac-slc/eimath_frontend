import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent{
  @Input() title: String = "";
  @Input() cls: String = "w-75";
  @Input() btnText: String = "w-75";
  @Input() action: String = "";

  constructor(
    protected link: LinkUtil,
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService
  ){

  }


}
