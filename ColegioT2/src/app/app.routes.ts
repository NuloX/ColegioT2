import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ProfesorGuard } from './shared/guard/profesor.guard';
import { AlumnoGuard } from './shared/guard/alumno.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AdminGuard } from './shared/guard/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'alumno',
    component: ContentLayoutComponent,
    canActivate: [AlumnoGuard],
    loadChildren: () => import('./components/alumnC/alumnos.routes').then(m => m.AlumnosRoutes)
  },
  {
    path: 'profesor',
    component: ContentLayoutComponent,
    canActivate: [ProfesorGuard],
    loadChildren: () => import('./components/adminC/profesores.routes').then(m => m.ProfesoresRoutes)
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    loadChildren: () => import('./components/admin/admin.routes').then(m => m.AdminRoutes)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'dashboard',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent 
      }
    ]
  },
   
];
