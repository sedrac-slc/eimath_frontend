import { Component } from '@angular/core';
import { ConstantUtil } from 'src/app/utils/constant.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(protected constant: ConstantUtil){

  }

}
