import { Component, OnInit } from '@angular/core';
import { ApiUserDataService, GradoSeccion, Profesor } from '../../../shared/services/apiUserData.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiCursosDataService } from '../../../shared/services/apiCursosData.service';

@Component({
  selector: 'app-anadir-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './anadir-user.component.html',
  styleUrl: './anadir-user.component.css'
})
export class AnadirUserComponent implements OnInit {
  profesores: Profesor[] = [];
  gradosYSecciones: GradoSeccion[] = [];
  asignaciones: { grado: string; seccion: string; profesores: string[] }[] = [{ grado: '', seccion: '', profesores: [] }];

  constructor(private dataService: ApiUserDataService,private cursoService: ApiCursosDataService) {}

  ngOnInit() {
    this.loadProfesores();
    this.gradosYSecciones = this.dataService.getGradosYSecciones();
  }

  loadProfesores() {
    this.profesores = this.dataService.getProfesores();
  }

  getSeccionesPorGrado(grado: string): string[] {
    const gradoSeccion = this.gradosYSecciones.find(g => g.grado === grado);
    return gradoSeccion ? gradoSeccion.secciones : [];
  }

  agregarCurso() {
    const nuevoCurso = {
      nom_curso: (document.querySelector('#nom_curso') as HTMLInputElement).value,
      descripcion: (document.querySelector('#descripcion') as HTMLTextAreaElement).value,
      asignaciones: this.asignaciones
    };

    const cursoAgregado = this.cursoService.agregarCurso(nuevoCurso);
    console.log('Curso agregado:', cursoAgregado);
  }

  agregarAsignacion() {
    this.asignaciones.push({ grado: '', seccion: '', profesores: [] });
  }

  eliminarAsignacion(index: number) {
    this.asignaciones.splice(index, 1);
  }
}
