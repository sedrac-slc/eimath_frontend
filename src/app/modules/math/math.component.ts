import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseTokenUser } from 'src/app/model/responseTokenUser.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MathComponent {
  disabledInputs: boolean = true;
  responseTokenUser: ResponseTokenUser;

  protected file: File | null;

  protected formGroup: FormGroup;

  constructor(
    protected contentId: ContentIdUtil,
    protected language: LanguageService,
    protected guardService: GuardService,
    protected userService: UserService,
    protected sweetAlert: SweetALertService,
    private formBuilder: FormBuilder,
  ) {
    this.responseTokenUser = this.guardService.responseTokenUser();
    this.formGroup = this.formBuilder.group({
      file: [null, [Validators.required, this.validateFileType]],
    });
    this.file = null;
  }

  validateFileType(control: FormControl) {
    const file = control.value;
    if (file && !(file instanceof File)) {
      return {
        invalidFileType: true,
      };
    }
    return null;
  }

  updateInformation(form: FormGroup) {
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

  onFilechange(event: any) {
    this.file = event.target.files[0];
  }

  updatePhoto(event: Event) {
    event.preventDefault();

    if (this.file != null) {
      let responseTokenUser = this.guardService.responseTokenUser();
      this.userService.updateImagemAxios(this.file).then(function (response) {
        responseTokenUser.person = response.data;
        let json =  JSON.stringify(responseTokenUser);
        localStorage.setItem(GuardService.PERSON, json);
      }).catch(function (error) {
        Swal.fire("Não alterado");
      });

    }

  }

  imgUser(): string{
    return this.guardService.responseTokenUser().person.image;
  }

}
