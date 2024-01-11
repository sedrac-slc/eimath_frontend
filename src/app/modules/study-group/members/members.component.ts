import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathPageable } from 'src/app/model/mathPageable.model';
import { Member } from 'src/app/model/member.model';
import { MemberPage } from 'src/app/model/memberPage.model';
import { LanguageService } from 'src/app/services/language.service';
import { MemberService } from 'src/app/services/member.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { ImageUtil } from 'src/app/utils/image.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MembersComponent {

  member!: Member;
  memberPage: MemberPage;
  group_type: string = '';

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected image: ImageUtil,
    protected link: LinkUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected sweetAlert: SweetALertService,
    private memberService: MemberService,
    private route: ActivatedRoute
  ){
    this.memberPage = new MathPageable();
    switch(this.route.snapshot.params["group_type"]){
      case this.constant.group_maneger:
      case this.constant.group_participation:
         this.group_type = this.route.snapshot.params["group_type"];
         this.searchMember();
        break;
      default:
        this.navigator.dashboardRedirect();
    }

  }

  private searchMember(){
    let groupId = this.route.snapshot.params["id"];
    this.memberService.findAllByGroup(groupId).subscribe({
      next: (resp) => this.memberPage = resp,
      error: (_) => {}
     })
  }

  pagination(page: number) {
    let groupId = this.route.snapshot.params["id"];
    this.memberService.pagefindAllByGroup(groupId,page).subscribe({
     next: (resp) => this.memberPage = resp,
     error: (_) => {}
    })
  }

  deleteMember(member: Member){
    this.sweetAlert.confirmDelete( () =>{
      this.memberService.delete(member).subscribe({
        next: (_) => this.searchMember(),
        error: (_) => this.sweetAlert.operationFalied()
      })
    });
  }

}
