import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Group } from 'src/app/model/grupo.model';
import { StudyGroupPage } from 'src/app/model/grupoPage.model';
import { Member } from 'src/app/model/member.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';
import { StudyGroupService } from 'src/app/services/study-group.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';

@Component({
  selector: 'app-groups-participation',
  templateUrl: './groups-participation.component.html',
  styleUrls: ['./groups-participation.component.css']
})
export class GroupsParticipationComponent {
  person: UserPeople;
  studyGroupPage: StudyGroupPage;

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected sweetAlert: SweetALertService,
    protected studyGroupService: StudyGroupService,
    protected guardService: GuardService
  ){

    this.studyGroupPage = new StudyGroupPage();
    this.person = this.guardService.responseTokenUser().person;
    this.searchGroup();
  }

  private searchGroup(){
    this.studyGroupService.findAllMember(this.person.id).subscribe({
      next: (item) => {  this.studyGroupPage = item; }
    })
  }

  refreshPage(page: number) {
    this.studyGroupService.pageGroupsMemberByUserId(this.person.id, page)
      .pipe(catchError( _ => of(this.studyGroupPage)))
      .subscribe((resp) => { this.studyGroupPage = resp; });
  }

  changeMemberDelete(member: Member) {
    this.sweetAlert.confirmDelete(() => {
      this.studyGroupService.deleteMember(member).subscribe({
        next: (_) => this.searchGroup(),
        error: (_) => this.sweetAlert.operationFalied()
      })
    });
  }

}
