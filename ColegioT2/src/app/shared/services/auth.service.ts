import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private permisos: string[] = [];

  constructor() {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
  }

  almacenarDatosEnSessionStorage(token: string, userId: string, username: string, title: string): void {
    if (this.isBrowser()) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('ID_user', userId);
      sessionStorage.setItem('USERNAME', username);
      sessionStorage.setItem('TITLE_EN', title);
    }
  }

  obtenerIdUsuario(): string | null {
    return this.isBrowser() ? sessionStorage.getItem('ID_user') : null;
  }

  obtenerToken(): string | null {
    return this.isBrowser() ? sessionStorage.getItem('token') : null;
  }

  cerrarSesion(): void {
    if (this.isBrowser()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('ID_user');
      sessionStorage.removeItem('USERNAME');
      sessionStorage.removeItem('TITLE_EN');
      sessionStorage.removeItem('permisos');
    }
  }

  almacenarPermisos(permisos: any[]): void {
    this.permisos = permisos.map(permiso => permiso.NAME);
    if (this.isBrowser()) {
      sessionStorage.setItem('permisos', JSON.stringify(this.permisos));
    }
  }

  obtenerPermisos(): string[] {
    if (this.isBrowser()) {
      const permisosString = sessionStorage.getItem('permisos');
      return permisosString ? JSON.parse(permisosString) : [];
    }
    return [];
  }
}
