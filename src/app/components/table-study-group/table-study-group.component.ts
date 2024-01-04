import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from 'src/app/model/grupo.model';
import { StudyGroupPage } from 'src/app/model/grupoPage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-table-study-group',
  templateUrl: './table-study-group.component.html',
  styleUrls: ['./table-study-group.component.css']
})
export class TableStudyGroupComponent {

  @Input() person: UserPeople;
  @Input() studyGroupPage: StudyGroupPage;

  @Input() btnAction: boolean = true;
  @Input() btnMembro: boolean = true;

  @Output() onClickedPage: EventEmitter<number>;
  @Output() onClickedEditGroup: EventEmitter<Group>;
  @Output() onClickedDeleteGroup: EventEmitter<Group>;
  @Output() onClickedConvitGroup: EventEmitter<Group>;

  constructor(
    protected language: LanguageService
  ){
    this.person = new UserPeople();
    this.studyGroupPage = new StudyGroupPage();
    this.onClickedPage = new EventEmitter();
    this.onClickedEditGroup = new EventEmitter();
    this.onClickedDeleteGroup = new EventEmitter();
    this.onClickedConvitGroup = new EventEmitter();
  }

  private getGroup(uuid: string){
    let list: Array<Group> = this.studyGroupPage.content;
    let index = list.findIndex(it => it.id == uuid);
    return list[index];
  }

  onClickedPageEmitter(page: number) {
    this.onClickedPage.emit(page);
  }

  onClickedEditGroupEmitter(uuid: string) {
    this.onClickedEditGroup.emit(this.getGroup(uuid));
  }

  onClickedDeleteGroupEmitter(uuid: string) {
    this.onClickedDeleteGroup.emit(this.getGroup(uuid));
  }

  onClickedConvitGroupEmitter(uuid: string) {
    this.onClickedConvitGroup.emit(this.getGroup(uuid));
  }

}
