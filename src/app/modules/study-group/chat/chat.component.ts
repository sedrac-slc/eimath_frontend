import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberPage } from 'src/app/model/memberPage.model';
import { MessagePage } from 'src/app/model/messagePage.model';
import { UserPeople } from 'src/app/model/userPeople.model';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { MemberService } from 'src/app/services/member.service';
import { MessageService } from 'src/app/services/message.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
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

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected image: ImageUtil,
    protected link: LinkUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected sweetAlert: SweetALertService,

    private route: ActivatedRoute,
    private guardService: GuardService,
    private memberService: MemberService,
    private messageService: MessageService
  ){
    this.memberPage = new MemberPage();
    this.messagePage = new MessagePage();
    switch(this.route.snapshot.params["group_type"]){
      case this.constant.group_maneger:
      case this.constant.group_participation:
         this.group_type = this.route.snapshot.params["group_type"];
         this.searchMember();
         this.searchMessages();
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


}
