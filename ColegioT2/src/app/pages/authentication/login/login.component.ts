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
import { ApiUserDataService } from '../../../shared/services/apiUserData.service';

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
    private apiUserData:ApiUserDataService,
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
    
    
    // Buscar si existe un usuario con el email y contraseña correctos
    

    
    if (isPlatformBrowser(this.platformId)) {
      if (this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }
      const users =this.apiUserData.getApiUsers();

      // Verificamos si el usuario y la contraseña coinciden con los valores predeterminados
      const usuarioIngresado = this.myForm.value.usuario;
      const contrasenaIngresada = this.myForm.value.contrasena;

      const foundUser = users.find(user => user.email === usuarioIngresado && user.password === contrasenaIngresada);
      if (foundUser) {
        if (foundUser.rol === 'profesor') {
            // Redirigir a la vista del profesor
            console.log('Redirigiendo a la vista de profesor');
            this.router.navigateByUrl('/admin/cursos');
            // Aquí podrías hacer algo como: this.router.navigate(['/profesor']);
        } else if (foundUser.rol === 'alumno') {
            // Redirigir a la vista del alumno
            console.log('Redirigiendo a la vista de alumno');
            this.router.navigateByUrl('/home/actividades');
            // Aquí podrías hacer algo como: this.router.navigate(['/alumno']);
        }
    } else {
        console.log('Correo o contraseña incorrectos');
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


