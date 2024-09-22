import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
  const userId = this.authService.obtenerIdUsuario();
  const userRole = sessionStorage.getItem('TITLE_EN');  // Obtén el título o rol directamente

  if (userId && userRole === 'profesor') {  // Comprueba si el rol es 'profesor'
    return true;
  }

  this.router.navigate(['/login']);
  return false;
}
}
