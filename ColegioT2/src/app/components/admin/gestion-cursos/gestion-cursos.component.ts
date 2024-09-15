import { Component } from '@angular/core';
import { TablaCursosComponent } from "../tabla-cursos/tabla-cursos.component";

@Component({
  selector: 'app-gestion-cursos',
  standalone: true,
  imports: [TablaCursosComponent],
  templateUrl: './gestion-cursos.component.html',
  styleUrl: './gestion-cursos.component.css'
})
export class GestionCursosComponent {

}
