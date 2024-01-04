import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyGroupRoutingModule } from './study-group-routing.module';
import { StudyGroupComponent } from './study-group.component';
import { SelectorLanguageModule } from 'src/app/components/selector-language/selector-language.module';
import { DashboardModule } from 'src/app/template/dashboard/dashboard.module';
import { GroupsManagerComponent } from './groups-manager/groups-manager.component';
import { GroupsParticipationComponent } from './groups-participation/groups-participation.component';
import { TableStudyGroupComponent } from 'src/app/components/table-study-group/table-study-group.component';
import { FormInputModule } from 'src/app/components/form-input/form-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableStudyGroupModule } from 'src/app/components/table-study-group/table-study-group.module';


@NgModule({
  declarations: [
    StudyGroupComponent,
    GroupsManagerComponent,
    GroupsParticipationComponent,
  ],
  imports: [
    CommonModule,
    StudyGroupRoutingModule,
    SelectorLanguageModule,
    TableStudyGroupModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,

    FormInputModule
  ]
})
export class StudyGroupModule {



}
