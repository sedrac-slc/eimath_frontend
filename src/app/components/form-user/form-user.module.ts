import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { FormInputModule } from '../form-input/form-input.module';
import { FormSelectModule } from '../form-select/form-select.module';

@NgModule({
  declarations: [
    FormUserComponent,
  ],
  exports: [
    FormUserComponent,
  ],
  imports: [
    CommonModule,
    FormInputModule,
    FormSelectModule
  ]
})
export class FormUserModule {

}
