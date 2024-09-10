import { Routes } from "@angular/router";
import { CursosComponent } from "./cursos/cursos.component";
import { EvaluacioneComponent } from "./evaluacione/evaluacione.component";


export const AdminRoutes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent
  },

  {
    path: 'evaluaciones',
    component: EvaluacioneComponent
  },
]