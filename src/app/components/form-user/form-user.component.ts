import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormValiedService } from 'src/app/services/form-valied.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { SelectOption } from 'src/app/classes/select.class';
import { UserPeople } from 'src/app/model/userPeople.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent {

  @Input() disabledInputs: boolean = false;
  @Input() visiblePassword: boolean = true;
  @Input() person: UserPeople;
  @Input() formIsAuth: boolean = false;


  @Output() onSubmit: EventEmitter<FormGroup>;


  protected form: FormGroup;
  protected genders: Array<SelectOption>;

  protected attribute = {
    name: 'name',
    username: 'username',
    email: 'email',
    phone: 'phone',
    birthday: 'birthday',
    gender: 'gender',
    password: 'password',
    password_confirm: 'password_confirm'
  }

  constructor(
    protected formBuilder: FormBuilder,
    protected formValied: FormValiedService,
    protected language: LanguageService
  ){

    this.form = this.formBuilder.group({
      name: [null, [ Validators.required, Validators.pattern(/[a-zA-Z]+(\s[a-zA-Z])+/)] ],
      username: [null, [ Validators.required, Validators.pattern(/[a-zA-Z]+/) ] ],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      birthday: [null, Validators.required],
      gender: [null, Validators.required],
      password: [null, [Validators.required, Validators.min(8) ] ],
      password_confirm: [null, [Validators.required, Validators.min(8) ] ]
    });

    this.formValied.setFormGroup(this.form);
    this.genders = SelectOption.genders();
    this.person = new UserPeople();
    this.onSubmit = new EventEmitter();
  }

  onSubmitEmitter(evt: Event){
    evt.preventDefault();
    if(!this.visiblePassword){
      this.form.value.password = this.form.value.password_confirm = "undefined";
    }
    console.log("emitindo");
    this.onSubmit.emit(this.form);
  }

   format(date: any): string{
    if(date == undefined) return '';
    if(date.length == 3){
      let formatDate = date[0]+"-"+(date[1] < 10 ? '0'+date[1] : date[1])+"-"+(date[2] < 10 ? '0'+date[2] : date[2]);
      return formatDate;
    }
    return date.toLocaleString('default');
  }


}
