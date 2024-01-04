import { NgModule } from "@angular/core";
import { TableStudyGroupComponent } from "./table-study-group.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TableStudyGroupComponent,
  ],
  exports: [
    TableStudyGroupComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TableStudyGroupModule {

}
