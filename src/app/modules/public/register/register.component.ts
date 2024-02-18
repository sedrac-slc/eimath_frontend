import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  constructor(
    protected language: LanguageService,
    protected contentId: ContentIdUtil,
    protected sweeAlert: SweetALertService,

    private userService: UserService,
    private guardService: GuardService
  ){

  }

  register(form: FormGroup) {
    if(form.value.password != form.value.password_confirm)
      this.sweeAlert.passwordFalied();
    else{
      form.valid ? this.createAccount(form) : this.sweeAlert.validateFalied();
    }
  }

  private createAccount(form: FormGroup){

    this.userService.registerAuth(form).subscribe({
      next: (resp) => {
        this.guardService.savePersonInLocalStorage(resp);
        this.guardService.redirectDashboard();
      },
      error: (_) => {
        this.sweeAlert.createAccountFalied();
        this.guardService.logaut();
      },
    });

  }



}
