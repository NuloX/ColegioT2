import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ProfesorGuard } from './shared/guard/profesor.guard';
import { AlumnoGuard } from './shared/guard/alumno.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'alumno',
    component: ContentLayoutComponent,
    canActivate: [AlumnoGuard],
    loadChildren: () => import('./components/alumnC/alumn.routes').then(m => m.AlumnRoutes)
  },
  {
    path: 'profesor',
    component: ContentLayoutComponent,
    canActivate: [ProfesorGuard],
    loadChildren: () => import('./components/adminC/admin.routes').then(m => m.AdminRoutes)
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
