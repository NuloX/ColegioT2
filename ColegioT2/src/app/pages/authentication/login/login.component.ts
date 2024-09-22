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
import { Parameter } from '../../../shared/model/parameter';
import { apiloginService } from '../../../shared/services/admin/apiloginData.service';

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
    private logindata:apiloginService,
    private apiUserData:ApiUserDataService,
    private authservice:AuthService,
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
  
      const parametro: Parameter = new Parameter();
      parametro.method = 'POST';
      parametro.url = 'authRoutes';
      parametro.data = {
        "correo": this.myForm.value.usuario,
        "contraseña": this.myForm.value.contrasena
      };
  
      this.logindata.LoginIngreso(parametro).subscribe(
        (response: any) => {
          if (response.token && response.token.token && response.token.id_usuario && response.token.rol) {
            // Almacenar el token y la información adicional del usuario
            this.authservice.almacenarDatosEnSessionStorage(
              response.token.token,  // El JWT token
              response.token.id_usuario,  // El ID del usuario
              this.myForm.value.usuario,  // El username (opcionalmente desde el formulario)
              response.token.rol  // El rol del usuario
            );
  
            // Lógica de redirección basada en el rol
            const userRole = response.token.rol;
            if (userRole === 'profesor' ) {
              this.router.navigateByUrl('/profesor/cursos');
            } else if (userRole === 'alumno') {
              console.log('si entro al if Alumno');
              this.router.navigateByUrl('/alumno/actividades');
            } else if (userRole === 'administrador') {
              console.log('si entro al if admin');
              this.router.navigateByUrl('/admin/Cursos');
            }
          } else {
            // Manejar el caso donde no haya token o datos del usuario en la respuesta
          }
        },
        (error) => {
          // Manejar errores en la respuesta del servidor
        }
      );
    }
  }
  
  
  

  get userNoValid() {
    return this.myForm.get('usuario')?.invalid && this.myForm.get('usuario')?.touched;
  }

  get passNoValid() {
    return this.myForm.get('contrasena')?.invalid && this.myForm.get('contrasena')?.touched;
  }
}


