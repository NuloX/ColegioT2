import { Component } from '@angular/core';
import { ApiUserDataService } from '../../../shared/services/apiUserData.service';
import { MatDialog } from '@angular/material/dialog';
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TablaProfesoresComponent } from "../tabla-profesores/tabla-profesores.component";

@Component({
  selector: 'app-gestion-profesores',
  standalone: true,
  imports: [TableComponent, CommonModule, MatIcon, TablaProfesoresComponent],
  templateUrl: './gestion-profesores.component.html',
  styleUrl: './gestion-profesores.component.css'
})
export class GestionProfesoresComponent {
  roles: [] = []
  apiDataUsers: any[] = []
  encabezadoUsers = ["User", "Rol", "Options"];
  constructor(private apiUserDataService: ApiUserDataService, public dialog: MatDialog) {
    this.apiDataUsers=apiUserDataService.getProfesores();
  }
}
