import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, of } from 'rxjs';

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
      return userString ? JSON.parse(userString) : null;  // Solo hace JSON.parse si es un objeto JSON
    }
    return null;
  }
  obtenerToken(): string | null {
    return this.isBrowser() ? sessionStorage.getItem('token') : null;
  }
  cerrarSesion(): void {
    if (this.isBrowser()) {
      sessionStorage.clear(); 
      this.router.navigate(['/login']);  
    }
  }
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  showLoader() {
    this.loadingSubject.next(false);
  }

  hideLoader() {
    this.loadingSubject.next(false);
  }

}
