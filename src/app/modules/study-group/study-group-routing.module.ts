import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyGroupComponent } from './study-group.component';
import { GroupsManagerComponent } from './groups-manager/groups-manager.component';
import { GroupsParticipationComponent } from './groups-participation/groups-participation.component';

import { LinkUtil } from 'src/app/utils/link.util';
import { MembersComponent } from './members/members.component';
import { ChatComponent } from './chat/chat.component';

const URL = new LinkUtil();

const routes: Routes = [
  { path: '', component: StudyGroupComponent },
  { path: URL.study_group_maneger, component: GroupsManagerComponent },
  { path: URL.study_group_participation, component: GroupsParticipationComponent },
  { path: URL.study_group_members_parm, component: MembersComponent },
  { path: URL.study_group_chat_parm, component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyGroupRoutingModule { }
