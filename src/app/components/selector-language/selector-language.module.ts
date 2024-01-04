import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorLanguageComponent } from './selector-language.component';

@NgModule({
  declarations: [
    SelectorLanguageComponent,
  ],
  exports: [
    SelectorLanguageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SelectorLanguageModule { }
