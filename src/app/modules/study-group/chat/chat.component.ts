import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/model/grupo.model';
import { MemberPage } from 'src/app/model/memberPage.model';
import { Message } from 'src/app/model/message.model';
import { MessagePage } from 'src/app/model/messagePage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { MemberService } from 'src/app/services/member.service';
import { MessageService } from 'src/app/services/message.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { StudyGroupService } from 'src/app/services/study-group.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { DateUtil } from 'src/app/utils/date.util';
import { ImageUtil } from 'src/app/utils/image.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent {

  group_type: string = '';
  memberPage: MemberPage;
  messagePage: MessagePage;
  person: UserPeople;
  group: Group;
  text: string = '';

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected image: ImageUtil,
    protected link: LinkUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected sweetAlert: SweetALertService,
    protected dateUtil: DateUtil,

    private route: ActivatedRoute,
    private guardService: GuardService,
    private memberService: MemberService,
    private messageService: MessageService,
    private studyGroup: StudyGroupService
  ){
    this.group = new Group();
    this.memberPage = new MemberPage();
    this.messagePage = new MessagePage();
    switch(this.route.snapshot.params["group_type"]){
      case this.constant.group_maneger:
      case this.constant.group_participation:
         this.group_type = this.route.snapshot.params["group_type"];
         this.searchMember();
         this.searchMessages();
         this.getGroup();
        break;
      default:
        this.navigator.dashboardRedirect();
    }
    this.person = this.guardService.responseTokenUser().person
  }

  private searchMember(){
    let groupId = this.route.snapshot.params["id"];
    this.memberService.findAllByGroup(groupId).subscribe({
      next: (resp) => this.memberPage = resp,
      error: (_) => {}
     });
  }

  private searchMessages(){
    let groupId = this.route.snapshot.params["id"];
    this.messageService.findAllByGroup(groupId).subscribe({
      next: (resp) => this.messagePage = resp,
      error: (_) => {}
     });
  }

  private getGroup(){
    let groupId = this.route.snapshot.params["id"];
    this.studyGroup.findById(groupId).subscribe({
      next: (resp) => this.group = resp,
      error: (_) => {}
     });
  }

  saveMessage(){
    let message = new Message(this.text,this.group, this.person);
    this.messageService.save(message).subscribe({
      next: (_) => this.searchMessages(),
      error: (_) => this.sweetAlert.operationFalied()
     });
  }


}
