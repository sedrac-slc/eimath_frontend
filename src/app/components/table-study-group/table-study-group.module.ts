import { NgModule } from "@angular/core";
import { TableStudyGroupComponent } from "./table-study-group.component";
import { CommonModule } from "@angular/common";
import { ResultNotFoundModule } from "../result-not-found/result-not-found.module";

@NgModule({
  declarations: [
    TableStudyGroupComponent,
  ],
  exports: [
    TableStudyGroupComponent
  ],
  imports: [
    CommonModule,
    ResultNotFoundModule
  ]
})
export class TableStudyGroupModule {

}
