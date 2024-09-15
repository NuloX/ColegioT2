import { Component } from '@angular/core';
import { TableComponent } from "../../../shared/components/table/table.component";
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ApiUserDataService } from '../../../shared/services/apiUserData.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-alumnos',
  standalone: true,
  imports: [TableComponent,MatIcon,CommonModule,FormsModule],
  templateUrl: './tabla-alumnos.component.html',
  styleUrl: './tabla-alumnos.component.css'
})
export class TablaAlumnosComponent {
  alumnos: any[] = [];
  encabezadoAlumnos: string[] = ['Username', 'Email', 'Grado', 'Sección', 'Actions'];

  filtroGrado: string = '';
  filtroSeccion: string = '';

  gradosDisponibles: string[] = [];
  seccionesDisponibles: string[] = [];

  constructor(private dataService: ApiUserDataService) { }

  ngOnInit(): void {
    this.alumnos = this.dataService.getAlumnos();
    this.cargarFiltros();
  }

  cargarFiltros() {
    // Obtener grados y secciones únicos para los filtros
    const grados = new Set(this.alumnos.map(alumno => alumno.grado));
    const secciones = new Set(this.alumnos.map(alumno => alumno.seccion));

    this.gradosDisponibles = Array.from(grados);
    this.seccionesDisponibles = Array.from(secciones);
  }

  alumnosFiltrados() {
    return this.alumnos.filter(alumno => {
      const coincideGrado = !this.filtroGrado || alumno.grado === this.filtroGrado;
      const coincideSeccion = !this.filtroSeccion || alumno.seccion === this.filtroSeccion;
      return coincideGrado && coincideSeccion;
    });
  }

 
}
