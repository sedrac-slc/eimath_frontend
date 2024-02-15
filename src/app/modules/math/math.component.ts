import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseTokenUser } from 'src/app/model/responseTokenUser.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
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

  protected formGroup: FormGroup

  constructor(
    protected contentId: ContentIdUtil,
    protected language: LanguageService,
    protected guardService: GuardService,
    protected userService: UserService,
    protected sweetAlert: SweetALertService,
    private formBuilder: FormBuilder,
  ){
    this.responseTokenUser = this.guardService.responseTokenUser();
    this.formGroup = this.formBuilder.group({
      file: [null,  [ Validators.required ] ],
    });
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

  updatePhoto(event: Event){
    event.preventDefault();
    this.userService.updateImagemAuth(this.formGroup).subscribe({
      next: (resp) => {
        this.sweetAlert.operationSuccess()
        console.log(resp);
      },
      error: (err) => {
        this.sweetAlert.operationFalied()
        console.error(err);
      }
    });
  }



}
