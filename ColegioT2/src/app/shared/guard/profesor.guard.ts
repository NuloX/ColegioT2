import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const user = this.authService.obtenerUsuario(); 

    if (user && user.title === 'profesor') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
