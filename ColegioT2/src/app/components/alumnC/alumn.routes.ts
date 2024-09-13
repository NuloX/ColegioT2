import { Routes } from "@angular/router";
import { ActividadesComponent } from "./actividades/actividades.component";
import { NotasComponent } from "./notas/notas.component";
import { AlumnoGuard } from "../../shared/guard/alumno.guard";


export const AlumnRoutes: Routes = [
  {
    path: 'actividades',
    component: ActividadesComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: 'notas',
    component: NotasComponent,
    canActivate: [AlumnoGuard],
  }
]