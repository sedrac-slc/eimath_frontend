import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvitsRoutingModule } from './convits-routing.module';
import { ConvitsComponent } from './convits.component';
import { DashboardModule } from 'src/app/template/dashboard/dashboard.module';
import { ResultNotFoundModule } from 'src/app/components/result-not-found/result-not-found.module';


@NgModule({
  declarations: [
    ConvitsComponent
  ],
  imports: [
    CommonModule,
    ConvitsRoutingModule,
    DashboardModule,
    ResultNotFoundModule
  ]
})
export class ConvitsModule { }
