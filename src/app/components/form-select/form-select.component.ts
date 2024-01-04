import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from 'src/app/classes/select.class';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
})
export class FormSelectComponent {
  @Input() id: string = "";
  @Input() icon: string = "";
  @Input() type: string = "text";
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() falied: boolean = false;
  @Input() disabled: boolean = false;
  @Input() options: Array<SelectOption> = [];

  @Output() onChangeValue: EventEmitter<string>;

  constructor(protected language: LanguageService){
    this.onChangeValue = new EventEmitter;
  }

  onChangeValueEmitter(value: string){
    this.onChangeValue.emit(value);
  }
}
