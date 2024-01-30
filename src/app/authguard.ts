import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({
   providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

   constructor(private authService: AuthenticationService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: boolean = this.authService.isAuthenticated

         if(val != null && val == true){
            if(url == "/login")
               this.router.parseUrl('/expenses');
            else 
               return true;
         }         
         return this.router.parseUrl('/login');

      }
}