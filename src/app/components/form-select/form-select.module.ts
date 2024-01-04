import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectComponent } from './form-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormSelectComponent,
  ],
  exports: [
    FormSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormSelectModule {

}
