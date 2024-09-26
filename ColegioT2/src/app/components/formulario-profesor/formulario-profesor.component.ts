import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ChangeDetectionStrategy, inject } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { Modal1formularioComponent } from '../modal1formulario/modal1formulario.component';


interface Grado {
  value: string;
  viewValue: string;
}

interface Seccion {
  value: string;
  viewValue: string;
}

interface Curso {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'formulario',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule,MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './formulario-profesor.component.html',
  styleUrls: ['./formulario-profesor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FormularioProfesorComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal1formularioComponent, {
      width: '500px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal 1 fue cerrado');
      // Puedes manejar el resultado aquí si es necesario
      console.log('Resultado:', result);
    });
  }



}


