import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

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
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule,
    MatInputModule, FormsModule, MatSelectModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(dialog1, {
      width: '500px', 
      height: '600px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog1',
  templateUrl: 'dialog1.html',
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
    styleUrls: ['./button.component.css'],
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class dialog1 {
  readonly dialogRef = inject(MatDialogRef<dialog1>);
  readonly dialog = inject(MatDialog);

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSecondDialog(): void {
    this.dialogRef.close(); // Cierra el primer modal

    // Abre el segundo modal
    const dialogRef2 = this.dialog.open(dialog2, {
      width: '1800px',
      height: '900px',
      panelClass: 'custom-dialog-container',
      data: { reopenDialog1: this.dialog } // Pasa el dialog para reabrir dialog1
    });

    dialogRef2.afterOpened().subscribe(() => {
      const containerElement = document.querySelector('.mat-dialog-container');
      if (containerElement) {
        (containerElement as HTMLElement).style.width = '1800px';
      }
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log('The second dialog was closed');
    });
  }

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

}

@Component({
  selector: 'dialog2',
  templateUrl: 'dialog2.html',
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
  styleUrls: ['./button.component.css'],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class dialog2 {

  readonly dialogRef = inject(MatDialogRef<dialog2>);
  readonly dialog = inject(MatDialog);

  onNoClick(): void {
    this.dialogRef.close();
  }

  openFirstDialog(): void {
    this.dialogRef.close(); // Cierra el primer modal

    // Abre el primer modal
    const dialogRef1 = this.dialog.open(dialog1, {
      data: { reopenDialog2: this.dialog } // Pasa el dialog para reabrir dialog1
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The first dialog was closed');
    });
  }

}




