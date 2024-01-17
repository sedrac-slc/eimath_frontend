import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import { SelectOption } from 'src/app/classes/select.class';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';

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


  @Input() form: FormGroup;
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
    protected language: LanguageService,
    private guardService: GuardService
  ){
    this.person = this.guardService.responseTokenUser().person;
    this.form =  this.formBuilder.group({
      name: [this.formIsAuth ? null : this.person.name, [ Validators.required, Validators.pattern(/[a-zA-Z]+(\s[a-zA-Z])+/)] ],
      username: [this.formIsAuth ? null : this.person.username, [ Validators.required, Validators.pattern(/[a-zA-Z]+/) ] ],
      email: [this.formIsAuth ? null : this.person.email, [Validators.required, Validators.email]],
      phone: [this.formIsAuth ? null : this.person.phone, Validators.required],
      birthDay: [this.formIsAuth ? null : this.person.birthDay, Validators.required],
      gender: [this.formIsAuth ? null : this.person.gender, Validators.required],
      password: [null, [Validators.required, Validators.min(8) ] ],
      password_confirm: [null, [Validators.required, Validators.min(8) ] ]
    });
    this.genders = SelectOption.genders();
    this.onSubmit = new EventEmitter();
  }

  isValid(name: string): boolean{
    const view = this.form.get(name);
    return view?.valid ?? false;
  }

  onSubmitEmitter(evt: Event){
    evt.preventDefault();
    if(!this.visiblePassword){
      this.form.value.password = this.form.value.password_confirm = "undefined";
    }
    console.log(this.form.value)
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
