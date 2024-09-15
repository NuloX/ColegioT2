import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ApiUserDataService } from '../../../shared/services/apiUserData.service';
import { ApiCursosDataService } from '../../../shared/services/apiCursosData.service';
import { CursosComponent } from '../../adminC/cursos/cursos.component';

@Component({
  selector: 'app-tabla-profesores',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIcon,TableComponent],
  templateUrl: './tabla-profesores.component.html',
  styleUrl: './tabla-profesores.component.css'
})
export class TablaProfesoresComponent {
  profesores: any[] = [];
  cursos: any[] = [];
  encabezadoProfesores: string[] = ['Username', 'Email', 'Actions'];

  filtroNombre: string = '';

  constructor(private dataService: ApiUserDataService,private dataCursos:ApiCursosDataService) { }

  ngOnInit(): void {
    this.profesores = this.dataService.getProfesores();
    this.cursos=this.dataCursos.getApiCursos()
  }
  getCursoNombre(cod_curso: number) {
    const curso = this.cursos.find(c => c.cod_curso === cod_curso);
    return curso ? curso.nom_curso : 'Desconocido';
  }
  profesoresFiltrados() {
    return this.profesores.filter(profesor =>
        profesor.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
}
}
