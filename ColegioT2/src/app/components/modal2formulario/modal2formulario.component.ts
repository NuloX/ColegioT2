import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ChangeDetectionStrategy, inject } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CommonModule } from '@angular/common'; // Importar CommonModule

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Modal1formularioComponent } from '../modal1formulario/modal1formulario.component';


import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal2formulario',
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
    MatDatepickerModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  templateUrl: './modal2formulario.component.html',
  styleUrl: './modal2formulario.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class Modal2formularioComponent {

    selectedOption: string | undefined;
  
    arregloPregunta: string[] = [];
  
    contador: number = 1;
  
    todasLasOpciones: string[] = [];
  
    readonly dialogRef1 = inject(MatDialogRef<Modal1formularioComponent>);
    readonly dialogRef2 = inject(MatDialogRef<Modal2formularioComponent>);
    readonly dialog = inject(MatDialog);
  
    onNoClick(): void {
      this.dialogRef2.close();
    }
  
    openFirstDialog(): void {
      this.dialogRef1.close(); // Cierra el primer modal
  
      // Abre el primer modal
      const dialogRef1 = this.dialog.open(Modal1formularioComponent, {
        data: { reopenDialog2: this.dialog },// Pasa el dialog para reabrir dialog1;;
        width: '500px',
        height: '600px',
      });
  
      dialogRef1.afterClosed().subscribe(result => {
        console.log('El primer modal se cerró');
  
      });
    }
  
    toppings: FormGroup;
  
    // Inicializar las etiquetas de los checkboxes con 'opcion1', 'opcion2', 'opcion3'
    checkboxLabels = {
      opcion1: '',
      opcion2: '',
      opcion3: '',
      opcion4: '',
      opcion5: '',
    };
  
    constructor(private fb: FormBuilder) {
      this.toppings = this.fb.group({
        opcion1: false,
        opcion2: false,
        opcion3: false,
        opcion4: false,
        opcion5: false
      });
    }
  
    // Función para guardar las opciones seleccionadas
    guardarSeleccionados(): void {
      // Limpiamos el arreglo antes de llenarlo nuevamente
      this.contador = this.contador + 1;
      this.todasLasOpciones = [];
  
      // Guardamos todas las opciones de los checkboxes, estén seleccionadas o no
      for (const key in this.checkboxLabels) {
        // Necesitamos hacer una afirmación de tipo aquí
        const labelKey = key as keyof typeof this.checkboxLabels;
        this.todasLasOpciones.push(this.checkboxLabels[labelKey]);
      }
  
      // Verificamos que todas las opciones se hayan guardado
      console.log('Todas las opciones:', this.todasLasOpciones);
  
      // Limpiar textarea(s)
      const textareas = document.querySelectorAll('textarea');
      textareas.forEach((textarea: HTMLTextAreaElement) => {
        textarea.value = '';
      });
  
      // Limpiar input(s) para las alternativas
      this.checkboxLabels.opcion1 = '';
      this.checkboxLabels.opcion2 = '';
      this.checkboxLabels.opcion3 = '';
      this.checkboxLabels.opcion4 = '';
      this.checkboxLabels.opcion5 = '';
  
      // Limpiar select
      this.selectedOption = ''; // O asigna el valor predeterminado que prefieras
  
      // Limpiar checkboxes
      this.toppings.reset();  // Resetea los checkboxes del FormGroup
      console.log('Campos limpiados correctamente');
  
  
    }
  
  }