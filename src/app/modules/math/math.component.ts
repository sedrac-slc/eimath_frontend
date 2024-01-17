import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseTokenUser } from 'src/app/model/responseTokenUser.model';
import { GuardService } from 'src/app/services/guard.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  disabledInputs: boolean = true;
  responseTokenUser: ResponseTokenUser;

  constructor(
    protected contentId: ContentIdUtil,
    protected guardService: GuardService,
    protected userService: UserService,
    protected sweetAlert: SweetALertService
  ){
    this.responseTokenUser = this.guardService.responseTokenUser();
  }

  updateInformation(form: FormGroup){
    this.userService.updateAuth(form).subscribe({
      next: (resp) => {
       let responseTokenUser = this.guardService.responseTokenUser();
       responseTokenUser.person = resp;
       this.guardService.savePersonInLocalStorage(responseTokenUser);
      },
      error: (e) => {
        console.error(e)
        this.sweetAlert.operationFalied();
      }
    })
  }

  updatePassoword(form: FormGroup){
    this.userService.updatePassowrdAuth(form).subscribe({
      error: (_) => this.sweetAlert.operationFalied()
    })
  }

}
