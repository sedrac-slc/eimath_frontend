import { Component } from '@angular/core';
import { Convit } from 'src/app/model/convit.model';
import { ConvitPage } from 'src/app/model/convitPage.model';
import { ConvitsService } from 'src/app/services/convits.service';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';
import { ImageUtil } from 'src/app/utils/image.util';

@Component({
  selector: 'app-convits',
  templateUrl: './convits.component.html',
  styleUrls: ['./convits.component.css']
})
export class ConvitsComponent {

  convit!: Convit;
  convitPage: ConvitPage;

  constructor(
    protected contentId: ContentIdUtil,
    protected image: ImageUtil,
    protected language: LanguageService,
    protected guardService: GuardService,
    private convitService: ConvitsService,
  ){
    this.convitPage = new ConvitPage();
    this.searchConvits();
  }

  private searchConvits(){
    let uuid : string = this.guardService.responseTokenUser().person.id
    this.convitService.findAllByUserId(uuid).subscribe({
      next: (resp) => this.convitPage = resp,
      error: (_) => {}
     })
  }

  pagination(page: number) {
    let uuid : string = this.guardService.responseTokenUser().person.id
    this.convitService.pagefindAllByUserId(uuid,page).subscribe({
     next: (resp) =>  this.convitPage = resp,
     error: (_) => {}
    })
  }

}
