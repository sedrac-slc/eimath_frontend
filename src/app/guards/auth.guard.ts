import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from '../services/guard.service';
import { NavigatorService } from '../services/navigator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgGuard implements CanActivate {

  constructor(private guardService: GuardService, private navigator: NavigatorService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.guardService.confirmedPerson()) return true;
    this.navigator.loginRedirect()
    return false;
  }

}
