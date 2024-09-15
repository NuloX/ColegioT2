import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ApiUserDataService } from '../../../shared/services/apiUserData.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ApiCursosDataService } from '../../../shared/services/apiCursosData.service';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [TableComponent,CommonModule,MatIcon],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent {
  roles: [] = []
  apiDataCursos: any[] = []
  profesores:any[]=[]
  encabezadoCursos: string[] = ['Curso', 'Descripción', 'Profesores', 'Grados'];
  constructor(private apiUserDataService: ApiCursosDataService,private pro:ApiUserDataService, public dialog: MatDialog) {
    this.apiDataCursos=apiUserDataService.getApiCursos();
    this.profesores=pro.getProfesores()
  }
    getProfesorNombre(nombre: string): string {
      const profesores = this.profesores;
      console.log(profesores)
      const profesor = profesores.find(p => p.user === nombre);
      return profesor ? profesor.nombre : 'Desconocido';
  }
  


}
