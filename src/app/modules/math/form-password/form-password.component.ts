import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValiedService } from 'src/app/services/form-valied.service';
import { LanguageService } from 'src/app/services/language.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent {
  protected form: FormGroup;

  protected attribute = {
    password_new: 'password_new',
    password_confirm_new: 'password_confirm_new',

    password_old: 'password_old',
    password_confirm_old: 'password_confirm_old'
  }

  constructor(
    protected formBuilder: FormBuilder,
    protected formValied: FormValiedService,
    protected sweeAlert: SweetALertService,
    protected language: LanguageService
  ){
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    formValied.setFormGroup(this.form);
  }

}
