import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './math.component';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { EquationComponent } from './equation/equation.component';
import { RadicalComponent } from './radical/radical.component';
import { LinkUtil } from 'src/app/utils/link.util';

const link = new LinkUtil();

const routes: Routes = [
  { path: '', component: MathComponent },
  { path: link.math_arithmetic, component: ArithmeticComponent },
  { path: link.math_equation, component: EquationComponent },
  { path: link.math_radical, component: RadicalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
