import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.authService.showLoader();
    const user = this.authService.obtenerUsuario(); 
    

    if (user && user.title === 'admin') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

