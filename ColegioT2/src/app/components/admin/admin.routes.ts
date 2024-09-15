import { Routes } from "@angular/router";
import { AdminGuard } from "../../shared/guard/admin.guard";
import { GestionCursosComponent } from "./gestion-cursos/gestion-cursos.component";
import { GestionProfesoresComponent } from "./gestion-profesores/gestion-profesores.component";
import { GestionAlumnosComponent } from "./gestion-alumnos/gestion-alumnos.component";
import { AnadirUserComponent } from "./anadir-user/anadir-user.component";


export const AdminRoutes: Routes = [
  {
    path: 'Cursos',
    canActivate: [AdminGuard],
    component: GestionCursosComponent
  },

  {
    path: 'Profesores',
    canActivate: [AdminGuard],
    component: GestionProfesoresComponent
  },
  {
    path: 'Alumnos',
    canActivate: [AdminGuard],
    component: GestionAlumnosComponent
  },
  {
    path: 'crud',
    canActivate: [AdminGuard],
    component: AnadirUserComponent
  },


]