import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidemenu1Collapsed: boolean = true;
  sidemenu2Collapsed: boolean = true;
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
