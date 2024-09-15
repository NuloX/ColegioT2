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
import { AuthService } from '../../../shared/services/auth.service';
import { Console } from 'console';

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
    private auth:AuthService,
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
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  
    const alumnos = this.apiUserData.getAlumnos();
    const profesores = this.apiUserData.getProfesores();
    const admins = this.apiUserData.getAdmins();
    const allUsers = [...alumnos, ...profesores, ...admins];
  
    const foundUser = allUsers.find(user => 
      user.email === this.myForm.value.usuario && 
      user.password === this.myForm.value.contrasena
    );
  
    if (foundUser) {
      const sessionToken = 'mockToken123'; 
  
      this.auth.almacenarDatosEnSessionStorage(
        sessionToken,
        foundUser.email, 
        foundUser.user, 
        foundUser.rol
      );
  
      console.log('ta bien');
  
      if (foundUser.rol === 'Profesor' || foundUser.rol === 'Profesora') {
        this.router.navigateByUrl('/profesor/cursos');
      } else if (foundUser.rol === 'Alumno') {
        console.log('si entro al if');
        this.router.navigateByUrl('/alumno/actividades');
      } else if (foundUser.rol === 'admin') {
        console.log('si entro al if');
        this.router.navigateByUrl('/admin/Cursos');
      }
    } else {
      console.log('ta mal');
    }
  }
  
  

  get userNoValid() {
    return this.myForm.get('usuario')?.invalid && this.myForm.get('usuario')?.touched;
  }

  get passNoValid() {
    return this.myForm.get('contrasena')?.invalid && this.myForm.get('contrasena')?.touched;
  }
}


