import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ChangeDetectionStrategy, inject } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule } from '@angular/forms';



import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { Modal2formularioComponent } from '../modal2formulario/modal2formulario.component';

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
  selector: 'app-modal1formulario',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatDatepickerModule
  ],
  templateUrl: './modal1formulario.component.html',
  styleUrl: './modal1formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})

export class Modal1formularioComponent {

  readonly dialogRef1 = inject(MatDialogRef<Modal1formularioComponent>);
  readonly dialog = inject(MatDialog);


  grados: Grado[] = [
    { value: '1', viewValue: '1°' },
    { value: '2', viewValue: '2°' },
    { value: '3', viewValue: '3°' },
    { value: '4', viewValue: '4°' },
    { value: '5', viewValue: '5°' },
  ];

  secciones: Seccion[] = [
    { value: 'A', viewValue: 'A' },
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' },
    { value: 'D', viewValue: 'D' },
    { value: 'E', viewValue: 'E' },
  ];

  cursos: Curso[] = [
    { value: 'lenguaje', viewValue: 'Lenguaje' },
    { value: 'literatura', viewValue: 'Literatura' },
    { value: 'razonamientoVerbal', viewValue: 'Razonamiento Verbal' },
    { value: 'planLector', viewValue: 'Plan Lector' },
    { value: 'comunicacion', viewValue: 'Comunicación' },
  ];

  onNoClick(): void {
    this.dialogRef1.close();
  }

  openSecondDialog(): void {
    const dialogRef2 = this.dialog.open(Modal2formularioComponent, {
      width: '1800px',
      height: '800px',
    });

    this.onNoClick();

    dialogRef2.afterOpened().subscribe(() => {
      const containerElement = document.querySelector('.mat-dialog-container');
      if (containerElement) {
        (containerElement as HTMLElement).style.width = '1800px';
      }
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('El segundo modal se cerró');
    });
  }
}
