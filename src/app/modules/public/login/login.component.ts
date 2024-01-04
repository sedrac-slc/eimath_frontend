import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValiedService } from 'src/app/services/form-valied.service';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { LoginService } from 'src/app/services/login.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  protected form: FormGroup;
  valid: boolean = true;

  attribute = {
    username: 'username',
    password: 'password'
  }

  constructor(
    protected contentId: ContentIdUtil,
    protected language: LanguageService,
    protected formValied: FormValiedService,
    private sweeAlert: SweetALertService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private guardService: GuardService,
    private navegator: NavigatorService
  ) {

    if(this.guardService.confirmedPerson()){
      this.navegator.dashboardRedirect();
    }

    this.form = this.formBuilder.group({
      username: [null,  [ Validators.required, Validators.pattern(/[a-zA-Z]+/) ] ],
      password: [null, Validators.required]
    });
    formValied.setFormGroup(this.form);

  }

  login(event: Event) {
    event.preventDefault();
    this.form.valid ? this.loginUser() : this.sweeAlert.validateFalied();
  }

  private loginUser() {
    this.valid = false;
    this.loginService.auth(this.form).subscribe({
      next: (resp) => {
        this.guardService.savePersonInLocalStorage(resp);
        this.guardService.redirectDashboard();
      },
      error: (_) => {
        this.sweeAlert.loginFalied();
        this.guardService.logaut();
      }
    });
    this.valid = true;
  }

}
