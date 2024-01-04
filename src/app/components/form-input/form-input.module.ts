import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormInputComponent,
  ],
  exports: [
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormInputModule {

}
