import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,CommonModule],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.css'
})
export class ContentLayoutComponent {
  temp:boolean|undefined

  aparicionSide(){
    this.temp = !this.temp;
  }
  sideBar(){
    return this.temp;
  }
}
