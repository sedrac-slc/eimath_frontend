import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvitsComponent } from './convits.component';

const routes: Routes = [{ path: '', component: ConvitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvitsRoutingModule { }
