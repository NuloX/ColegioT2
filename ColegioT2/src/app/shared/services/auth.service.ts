import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private permisos: string[] = [];

  constructor(private router: Router) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
  }

  almacenarDatosEnSessionStorage(token: string, userId: string, username: string, title: string): void {
    if (this.isBrowser()) {
      const userObject = {
        token,
        userId,
        username,
        title
      };
      sessionStorage.setItem('user', JSON.stringify(userObject)); 
    }
  }
  
  obtenerUsuario(): any {
    if (this.isBrowser()) {
      const userString = sessionStorage.getItem('user');
      return userString ? JSON.parse(userString) : null; 
    }
    return null;
  }

  cerrarSesion(): void {
    if (this.isBrowser()) {
      sessionStorage.clear(); 
      this.router.navigate(['/login']);  
    }
  }
}
