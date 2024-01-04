import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-arithmetic-role',
  templateUrl: './arithmetic-role.component.html',
  styleUrls: ['./arithmetic-role.component.css']
})
export class ArithmeticRoleComponent {

  constructor(
    protected language: LanguageService
  ){

  }

}
