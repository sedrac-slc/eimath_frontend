import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LinkUtil } from 'src/app/utils/link.util';

const URL = new LinkUtil();

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: URL.public_login, component: LoginComponent },
  { path: URL.public_register, component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
