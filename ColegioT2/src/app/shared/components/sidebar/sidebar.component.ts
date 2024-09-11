import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiUserDataService } from '../../services/apiUserData.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  sidemenu1Collapsed: boolean = true;
  sidemenu2Collapsed: boolean = true;

  sidemenu1: boolean = false;
  sidemenu2: boolean = false;

  constructor(private apiDataUser:ApiUserDataService){

  }
  ngOnInit(): void {
    
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
}
