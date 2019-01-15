import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class SecurityGuard implements CanActivate {

  constructor(
    private auth: AuthService, 
    private router: Router,
  ) {}


  canActivate(): boolean{
    if(!this.auth.getAuth()){
      this.router.navigate(['/login']);
      return false;
    };
    return true;
  } 
}