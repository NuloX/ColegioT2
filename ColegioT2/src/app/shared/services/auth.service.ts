import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, of } from 'rxjs';
const SESSION_KEYS = {
  TOKEN: 'token',
  ID_USER: 'ID_user',
  USERNAME: 'USERNAME',
  TITLE_EN: 'TITLE_EN'
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private permisos: string[] = [];

  constructor() {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
  }

  // Centraliza las claves en constantes


almacenarDatosEnSessionStorage(token: string, userId: string, username: string, title: string): void {
  if (this.isBrowser()) {
    sessionStorage.setItem(SESSION_KEYS.TOKEN, token);
    sessionStorage.setItem(SESSION_KEYS.ID_USER, userId);
    sessionStorage.setItem(SESSION_KEYS.USERNAME, username);
    sessionStorage.setItem(SESSION_KEYS.TITLE_EN, title);
  }
}

obtenerIdUsuario(): string | null {
  return this.isBrowser() ? sessionStorage.getItem(SESSION_KEYS.ID_USER) : null;
}

obtenerToken(): string | null {
  return this.isBrowser() ? sessionStorage.getItem(SESSION_KEYS.TOKEN) : null;
}

cerrarSesion(): void {
  if (this.isBrowser()) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('ID_user');
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('TITLE_EN');
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
