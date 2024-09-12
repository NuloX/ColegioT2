import { Routes } from "@angular/router";
import { CursosComponent } from "./cursos/cursos.component";
import { EvaluacioneComponent } from "./evaluacione/evaluacione.component";
import { ProfesorGuard } from "../../shared/guard/profesor.guard";


export const AdminRoutes: Routes = [
  {
    path: 'cursos',
    canActivate: [ProfesorGuard],
    component: CursosComponent
  },

  {
    path: 'evaluaciones',
    canActivate: [ProfesorGuard],
    component: EvaluacioneComponent
  },
]