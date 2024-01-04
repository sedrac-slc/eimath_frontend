import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyGroupComponent } from './study-group.component';
import { GroupsManagerComponent } from './groups-manager/groups-manager.component';
import { GroupsParticipationComponent } from './groups-participation/groups-participation.component';

import { LinkUtil } from 'src/app/utils/link.util';

const URL = new LinkUtil();

const routes: Routes = [
  { path: '', component: StudyGroupComponent },
  { path: URL.study_group_maneger, component: GroupsManagerComponent },
  { path: URL.study_group_participation, component: GroupsParticipationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyGroupRoutingModule { }
