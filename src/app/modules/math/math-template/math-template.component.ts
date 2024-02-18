import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Exemple } from 'src/app/classes/exemple.class';
import { MathResponse } from 'src/app/model/math.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-math-template',
  templateUrl: './math-template.component.html',
  styleUrls: ['./math-template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MathTemplateComponent {
  @Input() title: string = 'undefined';
  @Input() topic: string = 'undefined';
  @Input() infoRole: boolean = true;
  @Input() infoExemple: boolean = true;

  @Input() value: string = '';
  @Input() url: string = '';

  @Input() mathForm!: FormGroup;

  mathResult: MathResponse = new MathResponse();

  config: boolean = false;

  constructor(
    protected link: LinkUtil,
    protected constante: ConstantUtil,
    protected contentId: ContentIdUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected guardeService: GuardService,
    protected sweetAlert: SweetALertService,

    private httpClient: HttpClient
  ) {

  }

  changeExpression(exemple: Exemple) {
    this.mathForm.value.expression = this.value = exemple.text;
  }

  send(event: Event) {
    event.preventDefault();

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.guardeService.responseTokenUser().token}`,
      })
    };

    this.httpClient.post<MathResponse>(this.url, this.mathForm.value, httpOptions).subscribe({
      next: (resp) => {
        this.mathResult = resp
        this.openPanel()
      },
      error: (_) =>{
        this.sweetAlert.validateFalied();
      }
    })

  }

  private openPanel(){
    const tabPanel = document.querySelectorAll('.tab-pane');
    tabPanel.forEach(tab => {
      if("pills-home" == tab.id){
        if(!tab.classList.contains('show')) tab.classList.add('show')
        if(!tab.classList.contains('active')) tab.classList.add('active')
      }else{
        if(tab.classList.contains('show')) tab.classList.remove('show')
        if(tab.classList.contains('active')) tab.classList.remove('active')
      }
    })
  }

}
