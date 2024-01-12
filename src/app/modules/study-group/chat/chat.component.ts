import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import { SweetALertService } from 'src/app/services/sweet-alert.service';
import { ConstantUtil } from 'src/app/utils/constant.util';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { ImageUtil } from 'src/app/utils/image.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  group_type: string = '';

  constructor(
    protected contentId: ContentIdUtil,
    protected constant: ConstantUtil,
    protected image: ImageUtil,
    protected link: LinkUtil,
    protected language: LanguageService,
    protected navigator: NavigatorService,
    protected sweetAlert: SweetALertService,
    private route: ActivatedRoute
  ){

    switch(this.route.snapshot.params["group_type"]){
      case this.constant.group_maneger:
      case this.constant.group_participation:
         this.group_type = this.route.snapshot.params["group_type"];

        break;
      default:
        this.navigator.dashboardRedirect();
    }

  }

}
