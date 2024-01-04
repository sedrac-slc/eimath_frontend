import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent {
  @Input() id: string = "";
  @Input() icon: string = "";
  @Input() type: string = "text";
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() falied: boolean = false;
  @Input() disabled: boolean = false;

  @Output() onChangeValue: EventEmitter<string>;

  constructor(){
    this.onChangeValue = new EventEmitter;
  }

  onChangeValueEmitter(value: string){
    this.onChangeValue.emit(value);
  }

}
