import { group } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/model/grupo.model';
import { StudyGroupPage } from 'src/app/model/grupoPage.model';
import { Member } from 'src/app/model/member.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-table-study-group',
  templateUrl: './table-study-group.component.html',
  styleUrls: ['./table-study-group.component.css']
})
export class TableStudyGroupComponent {

  @Input() person: UserPeople;
  @Input() type: string = '';
  @Input() studyGroupPage: StudyGroupPage;

  @Input() btnAction: boolean = true;
  @Input() btnMembro: boolean = true;

  @Output() onClickedPage: EventEmitter<number>;
  @Output() onClickedEditGroup: EventEmitter<Group>;
  @Output() onClickedDeleteGroup: EventEmitter<Group>;
  @Output() onClickedConvitGroup: EventEmitter<Group>;
  @Output() onClickedDeleteMember: EventEmitter<Member>;

  constructor(
    protected language: LanguageService,
    protected link: LinkUtil,
    protected navigator: NavigatorService,
    protected constant: ConstantUtil
  ){
    this.person = new UserPeople();
    this.studyGroupPage = new StudyGroupPage();
    this.onClickedPage = new EventEmitter();
    this.onClickedEditGroup = new EventEmitter();
    this.onClickedDeleteGroup = new EventEmitter();
    this.onClickedConvitGroup = new EventEmitter();
    this.onClickedDeleteMember = new EventEmitter();
  }

  onClickedPageEmitter(page: number) {
    this.onClickedPage.emit(page);
  }

  onClickedEditGroupEmitter(group: Group) {
    this.onClickedEditGroup.emit(group);
  }

  onClickedDeleteGroupEmitter(group: Group) {
    this.onClickedDeleteGroup.emit(group);
  }

  onClickedConvitGroupEmitter(group: Group) {
    this.onClickedConvitGroup.emit(group);
  }

  onClickedDeleteMemberEmitter(group: Group){
    let member = new Member();
    member.group = group;
    member.userPeople = this.person;
    this.onClickedDeleteMember.emit(member);
  }

}
