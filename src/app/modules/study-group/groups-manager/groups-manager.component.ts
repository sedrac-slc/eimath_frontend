import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError, of } from 'rxjs';
import { Convit } from 'src/app/model/convit.model';
import { Group } from 'src/app/model/grupo.model';
import { StudyGroupPage } from 'src/app/model/grupoPage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { ConvitsService } from 'src/app/services/convits.service';
import { FormValiedService } from 'src/app/services/form-valied.service';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { StudyGroupService } from 'src/app/services/study-group.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { LinkUtil } from 'src/app/utils/link.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-groups-manager',
  templateUrl: './groups-manager.component.html',
  styleUrls: ['./groups-manager.component.css']
})
export class GroupsManagerComponent {

  person: UserPeople;
  studyGroupPage: StudyGroupPage;
  form: FormGroup;
  group!: Group;


  action: string;

  action_create: string = "action_create";
  action_update: string = "action_update";
  action_convit: string = "action_convit";

  attribute = {
    name: 'name',
    userPeople: 'userPeople'
  }

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected language: LanguageService,
    protected guardService: GuardService,
    protected formValied: FormValiedService,
    protected sweetAlert: SweetALertService,
    protected studyGroupService: StudyGroupService,
    protected convitService: ConvitsService,

    private formBuilder: FormBuilder
  ) {
    this.studyGroupPage = new StudyGroupPage();
    this.person = this.guardService.responseTokenUser().person;

    this.form = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.pattern(/[a-zA-Z]+/)]],
      userPeople: [this.person.id, Validators.required]
    });

    this.formValied.setFormGroup(this.form);
    this.action = this.action_create;
    this.searchGroup();
  }

  private initFormGroup(id: string | null, name: string | null, person: string | null) {
    this.form = this.formBuilder.group({
      id: [id],
      name: [name, [Validators.required, Validators.pattern(/[a-zA-Z]+/)]],
      userPeople: [person, Validators.required]
    });
  }

  private subscribeOperation(obs: Observable<Group>) {
    obs.subscribe({
      next: (_) => {
        this.searchGroup();
        this.sweetAlert.operationSuccess();
      },
      error: (_) => this.sweetAlert.operationFalied()
    });
  }

  searchGroup() {
    this.studyGroupService.findAll(this.person.id).subscribe({
      next: (item) => { this.studyGroupPage = item; }
    })
  }

  refreshPage(page: number) {
    this.studyGroupService.pageGroupsByUserId(this.person.id, page)
      .pipe(catchError(_ => of(this.studyGroupPage)))
      .subscribe((resp) => { this.studyGroupPage = resp; });
  }

  submit(event: Event) {
    event.preventDefault();
    try {
      switch (this.action) {
        case this.action_create:
          this.subscribeOperation(this.studyGroupService.save(this.form));
          break;
        case this.action_update:
          this.subscribeOperation(this.studyGroupService.update(this.form));
          break;
        case this.action_convit:
          break;
      }
    } catch (_) { this.sweetAlert.operationFalied(); }
  }

  changeGroupCreate() {
    //this.action = this.action_create;
    //this.initFormGroup(null, null, this.person.id);
  }

  changeGroupEdit(group: Group) {
    this.group = group;
    this.action = this.action_update;
    this.initFormGroup(group.id, group.name, group.userPeople.id);
  }

  changeGroupDelete(group: Group) {
    this.sweetAlert.confirmDelete(() => {
      try {
        this.studyGroupService.delete(group).subscribe({
          next: (_) => this.searchGroup(),
          error: (_) => this.sweetAlert.operationFalied()
        })
      } catch (_) { this.sweetAlert.operationFalied(); }
    });
  }

  changeGroupConvit(group: Group) {
    try {
      Swal.fire({
        title: this.language.message().register_digit_email,
        input: "email",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        showLoaderOnConfirm: true,
        cancelButtonColor: "#DC3545",
        confirmButtonColor: "#866ec7",
        confirmButtonText: this.language.message().send,
        cancelButtonText: this.language.message().cancel,
        preConfirm: async (email) => {
          let person = this.guardService.responseTokenUser().person;
          let convit = new Convit(email, group, person);
          if (this.validarEmail(email)) {
            this.convitService.save(convit).subscribe({
              next: (resp) => {
                convit = resp;
                Swal.fire("Enviado com successo")
              },
              error: (_) => Swal.fire({ html: this.language.message().sweet_operation_failed, icon: 'error' })
            })
          } else {
            Swal.fire(this.language.message().sweet_verify_fields);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((_) => {
        //if (result.isConfirmed) {}
      });
    } catch (_) { this.sweetAlert.operationFalied(); }
  }

  private validarEmail(email: string): boolean {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

}
