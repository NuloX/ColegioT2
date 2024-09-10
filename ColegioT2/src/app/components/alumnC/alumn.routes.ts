import { Routes } from "@angular/router";
import { ActividadesComponent } from "./actividades/actividades.component";
import { NotasComponent } from "./notas/notas.component";


export const AlumnRoutes: Routes = [
  {
    path: 'actividades',
    component: ActividadesComponent
  },

  {
    path: 'notas',
    component: NotasComponent
  },
]