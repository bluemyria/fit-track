import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { take } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }

  canLoad(route: Route) {
    if ( this.store.select(fromRoot.getIsAuth).pipe(take(1)) ) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
