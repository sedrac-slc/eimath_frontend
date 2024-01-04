import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from 'src/app/template/login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { SelectorLanguageModule } from 'src/app/components/selector-language/selector-language.module';
import { FormUserModule } from 'src/app/components/form-user/form-user.module';
import { FormInputModule } from 'src/app/components/form-input/form-input.module';
import { FormSelectModule } from 'src/app/components/form-select/form-select.module';


@NgModule({
  declarations: [
    PublicComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    SelectorLanguageModule,
    FormUserModule,
    FormInputModule,
    FormSelectModule
  ]
})
export class PublicModule { }
