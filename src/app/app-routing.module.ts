import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkUtil } from './utils/link.util';
import { AuthgGuard } from './guards/auth.guard';

const link = new LinkUtil();

const routes: Routes = [
  { path: link.public, loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },
  { path: link.math, loadChildren: () => import('./modules/math/math.module').then(m => m.MathModule) },
  { path: link.study_group, loadChildren: () => import('./modules/study-group/study-group.module').then(m => m.StudyGroupModule), canActivate: [AuthgGuard] },
  { path: link.convits, loadChildren: () => import('./modules/convits/convits.module').then(m => m.ConvitsModule), canActivate: [AuthgGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
