import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValiedService } from 'src/app/services/form-valied.service';
import { LanguageService } from 'src/app/services/language.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormPasswordComponent {
  protected form: FormGroup;

  protected attribute = {
    password_new: 'passwordNew',
    password_confirm_new: 'passwordConfirmNew',

    password_old: 'passwordOld',
    password_confirm_old: 'passwordConfirmOld'
  }

  constructor(
    protected formBuilder: FormBuilder,
    protected formValied: FormValiedService,
    protected userService: UserService,
    protected sweetAlert: SweetALertService,
    protected language: LanguageService,
  ){
    this.form = this.formBuilder.group({
      passwordNew: [null, Validators.required],
      passwordConfirmNew: [null, Validators.required],
      passwordOld: [null, Validators.required],
      passwordConfirmOld: [null, Validators.required]
    });
    formValied.setFormGroup(this.form);
  }

  changePassoword(event: Event){
    event.preventDefault();
    this.userService.updatePassowrdAuth(this.form).subscribe({
      next: (_) => this.sweetAlert.operationSuccess(),
      error: (_) => this.sweetAlert.operationFalied()
    })
  }

}
