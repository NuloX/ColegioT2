import { Routes,RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'admin',
        component: ContentLayoutComponent,
        loadChildren: () => import('./components/adminC/admin.routes').then(m => m.AdminRoutes)
      },
      {
        path: 'home',
        component: ContentLayoutComponent,
        loadChildren: () => import('./components/alumnC/alumn.routes').then(m => m.AlumnRoutes)
      },
];
