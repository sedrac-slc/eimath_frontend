import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { StudyGroupPage } from 'src/app/model/grupoPage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';
import { StudyGroupService } from 'src/app/services/study-group.service';
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
    protected studyGroupService: StudyGroupService,
    protected guardService: GuardService
  ){

    this.studyGroupPage = new StudyGroupPage();
    this.person = this.guardService.responseTokenUser().person;
    this.studyGroupService.findAllMember(this.person.id).subscribe({
      next: (item) => {  this.studyGroupPage = item; }
    })

  }

  refreshPage(page: number) {
    this.studyGroupService.pageGroupsMemberByUserId(this.person.id, page)
      .pipe(catchError( _ => of(this.studyGroupPage)))
      .subscribe((resp) => { this.studyGroupPage = resp; });
  }

}
