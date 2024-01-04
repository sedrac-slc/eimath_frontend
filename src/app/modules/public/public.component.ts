import { Component } from '@angular/core';
import { GuardService } from 'src/app/services/guard.service';
import { LanguageService } from 'src/app/services/language.service';
import { ImageUtil } from 'src/app/utils/image.util';
import { LinkUtil } from 'src/app/utils/link.util';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {

  constructor(
    protected i18n: LanguageService,
    protected link: LinkUtil,
    protected image: ImageUtil,
    protected guardService: GuardService
  ) {

  }

}
