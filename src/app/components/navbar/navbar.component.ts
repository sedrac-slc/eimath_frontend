import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(
    protected link: LinkUtil,
    protected constant: ConstantUtil,
    protected language: LanguageService
  ){

  }

}
