import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isLoggedIn = this.checkIfUserIsLogged();
    const requiresAuth = route.data['requiresAuth'] || false;

    if (requiresAuth && !isLoggedIn) {
      // User is not logged in and the route requires authentication
      // Redirect to login page with the original URL as a query parameter
      return this.router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
    } else if (requiresAuth && isLoggedIn) {
      // User is logged in and the route requires authentication
      return true;
    } else if (!requiresAuth && isLoggedIn) {
      // User is logged in but the route doesn't require authentication
      // Redirect to dashboard or any other default route
      return this.router.createUrlTree(['/dashboard']);
    } else {
      // User is not logged in and the route doesn't require authentication
      // Allow access to the route
      return true;
    }
  }

  private checkIfUserIsLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token is present, false otherwise
  }
}
