import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false ;
    }
    return this.auth.isLoggedIn();
  }
}

export const IsAuthGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean => {
  return inject(AuthGuard).canActivate(route,state) ;
}
