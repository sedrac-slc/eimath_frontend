import { Component } from '@angular/core';
import { ContentIdUtil } from 'src/app/utils/content-ids.util';

@Component({
  selector: 'app-study-group',
  templateUrl: './study-group.component.html',
  styleUrls: ['./study-group.component.css']
})
export class StudyGroupComponent {

  constructor(
    protected contentId: ContentIdUtil
  ){

  }

}
