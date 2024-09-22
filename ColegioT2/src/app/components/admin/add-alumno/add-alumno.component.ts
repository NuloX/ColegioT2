import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { apiAlumnService } from '../../../shared/services/admin/apiAlumnData.service'; // Ajusta la ruta
import { Parameter } from '../../../shared/model/parameter';
import { UserUpdateService } from '../../../shared/services/actualizarusuario.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import e from 'express';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrl: './add-alumno.component.scss',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule, MatFormField, MatInput, MatInputModule, FormsModule, MatNativeDateModule, MatDatepickerModule]
})
export class AddAlumnoComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<AddAlumnoComponent>, @Inject(MAT_DIALOG_DATA) public datos: any,
    private userUpdateService: UserUpdateService,
    private apiService: apiAlumnService // Asegúrate de que el servicio esté importado
  ) {
    this.myForm = fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      id_aula: ['', Validators.required],
    });
  }

  crearAlumno() {
    if (this.myForm.invalid) {
        return Object.values(this.myForm.controls).forEach(control => {
            control.markAllAsTouched();
        });
    }

    const parametro: Parameter = new Parameter();
    parametro.method = 'POST';
    parametro.url = 'alumnos';
    parametro.data = {
        "nombre": this.myForm.value.nombre,
        "apellido": this.myForm.value.apellido,
        "correo": this.myForm.value.correo,
        "contraseña": this.myForm.value.contraseña,
        "id_aula": this.myForm.value.id_aula
    };

    this.apiService.crearAlumno(parametro).subscribe(
        (response: any) => {
            if (response.id_alumno) {
                const idAlumno = response.id_alumno.id_alumno; // Accediendo al id_alumno
                this.toastr.success(`Alumno creado exitosamente con ID: ${idAlumno}`);
                this.userUpdateService.triggerUserUpdate();
                this.dialogRef.close();
            } else {
                this.toastr.error('Error en la creación del alumno.');
            }
        },
        (error: any) => {
            if (error.error && error.error.mensaje) {
                this.toastr.error(error.error.mensaje, 'Error');
            } else {
                this.toastr.error('Error en la creación del alumno.', 'Error');
            }
        }
    );
}


}
