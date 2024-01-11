import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ConstantUtil } from 'src/app/utils/constant.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(protected constant: ConstantUtil, protected language: LanguageService){

  }

}
