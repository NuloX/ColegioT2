import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule, isPlatformBrowser } from '@angular/common';
//import { ToastrService } from 'ngx-toastr';  // Asegúrate de tener Toastr importado si lo usas
import { PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule,CommonModule,MatIconModule,MatButtonModule,MatInputModule,MatFormFieldModule]
})
export class LoginComponent {
  usuario = new FormControl('', [
    Validators.required,
  ]);
  contrasena = new FormControl('', [
    Validators.required,
  ]);
  hide = true;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    //private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.myForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  ngOnInit(): void { }

  login(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }

      // Verificamos si el usuario y la contraseña coinciden con los valores predeterminados
      const usuarioIngresado = this.myForm.value.usuario;
      const contrasenaIngresada = this.myForm.value.contrasena;

      if (usuarioIngresado === 'Admin' && contrasenaIngresada === 'admin') {
        // Simula almacenar datos en el servicio de autenticación
        //this.toastr.success('Logged in successfully', 'Success');
        this.router.navigateByUrl('/admin/cursos');
      } else {
        // Si los datos no coinciden, muestra un error
        //this.toastr.error('Incorrect username or password', 'Error');
      }
    }
  }

  get userNoValid() {
    return this.myForm.get('usuario')?.invalid && this.myForm.get('usuario')?.touched;
  }

  get passNoValid() {
    return this.myForm.get('contrasena')?.invalid && this.myForm.get('contrasena')?.touched;
  }
}


