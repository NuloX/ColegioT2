import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { TablaAlumnosComponent } from "../tabla-alumnos/tabla-alumnos.component";

@Component({
  selector: 'app-gestion-alumnos',
  standalone: true,
  imports: [TableComponent, TablaAlumnosComponent],
  templateUrl: './gestion-alumnos.component.html',
  styleUrl: './gestion-alumnos.component.css'
})
export class GestionAlumnosComponent {

}
