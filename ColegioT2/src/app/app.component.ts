import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./shared/components/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ColegioT2';
  isLoading: boolean = false;

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.authService.showLoader();
        }
        if (event instanceof NavigationEnd) {
          this.authService.hideLoader();
        }
      });
    
  }
}
