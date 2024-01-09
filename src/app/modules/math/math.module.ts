import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math.component';
import { SelectorLanguageModule } from 'src/app/components/selector-language/selector-language.module';
import { DashboardModule } from 'src/app/template/dashboard/dashboard.module';
import { FormUserModule } from 'src/app/components/form-user/form-user.module';
import { FormPasswordComponent } from './form-password/form-password.component';
import { FormInputModule } from 'src/app/components/form-input/form-input.module';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { RadicalComponent } from './radical/radical.component';
import { EquationComponent } from './equation/equation.component';
import { EquationRoleComponent } from './components/roles/equation-role/equation-role.component';
import { RadicalRoleComponent } from './components/roles/radical-role/radical-role.component';
import { RadicalExempleComponent } from './components/exemples/radical-exemple/radical-exemple.component';
import { EquationExempleComponent } from './components/exemples/equation-exemple/equation-exemple.component';
import { MathTemplateComponent } from './math-template/math-template.component';
import { ArithmeticExempleComponent } from './components/exemples/arithmetic-exemple/arithmetic-exemple.component';
import { ArithmeticRoleComponent } from './components/roles/arithmetic-role/arithmetic-role.component';
import { MathExempleComponent } from './math-exemple/math-exemple.component';
import { MathModalComponent } from './math-modal/math-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultNotFoundModule } from 'src/app/components/result-not-found/result-not-found.module';


@NgModule({
  declarations: [
    MathComponent,
    FormPasswordComponent,

    ArithmeticComponent,
    ArithmeticRoleComponent,
    ArithmeticExempleComponent,

    EquationComponent,
    EquationRoleComponent,
    EquationExempleComponent,


    RadicalComponent,
    RadicalRoleComponent,
    RadicalExempleComponent,

    MathTemplateComponent,
    MathExempleComponent,
    MathModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MathRoutingModule,
    SelectorLanguageModule,
    DashboardModule,
    FormUserModule,
    FormInputModule,
    ResultNotFoundModule
  ]
})
export class MathModule { }
