import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EquationComponent {
  equationForm: FormGroup;

  constructor(
    protected link: LinkUtil,
    protected contentId: ContentIdUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected constante: ConstantUtil,
    private formBuilder: FormBuilder
  ){
    this.equationForm = this.formBuilder.group({
      expression: ['', Validators.required],
      methodFractionSum: ['random', Validators.required],
      methodFractionSub: ['random', Validators.required],
      methodArithmeticSum: ['random', Validators.required],
      methodArithmeticSub: ['random', Validators.required],
      methodArithmeticSumOrSub: ['random', Validators.required],
    });
  }

}
