import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ApiUserDataService } from '../../services/apiUserData.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,RouterLink,RouterLinkActive,MatIconModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  sidemenu1Collapsed: boolean = true;
  sidemenu2Collapsed: boolean = true;

  sidemenu1: boolean = false;
  sidemenu2: boolean = false;
  rol: string | null = null;
  constructor(private apiDataUser:ApiUserDataService,private auth:AuthService,private router: Router, @Inject(PLATFORM_ID) private platformId: Object,private authService: AuthService){

  }
  ngOnInit(): void {
    this.rol = this.authService.obtenerUsuario()?.title;
  }
  toggleCollapse(collapseNumber: number) {
    if (collapseNumber === 1) {
      this.sidemenu1Collapsed = !this.sidemenu1Collapsed;
      /*if (!this.sidemenu1Collapsed) {
        this.sidemenu2Collapsed = true; // Cerrar el otro collapse si se abre este
      }*/
    } else if (collapseNumber === 2) {
      this.sidemenu2Collapsed = !this.sidemenu2Collapsed;
      /*if (!this.sidemenu2Collapsed) {
        this.sidemenu1Collapsed = true; // Cerrar el otro collapse si se abre este
      }*/
    }
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {

        this.auth.cerrarSesion();
          
    } else {
      console.log('ta mal')
    }
  }
}
