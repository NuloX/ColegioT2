
import { Injectable } from "@angular/core";

export interface Profesor {
    cod_usuario: number;
    user: string;
    password: string;
    nombre: string;
    email: string;
    rol: string;
    asignaciones: Asignacion[];
  }
  
  export interface Asignacion {
    cod_curso: number;
    grado: string;
    seccion: string;
  }
  
  export interface GradoSeccion {
    grado: string;
    secciones: string[];
  }
@Injectable({
    providedIn: 'root'
})
export class ApiUserDataService {
    
    getAlumnos() {
        return [
            {
                cod_usuario: 1,
                user: 'ana.perez',
                password: 'password123',
                nombre: 'Ana Pérez',
                email: 'ana.perez@colegio.com',
                grado: '5to',
                seccion: 'A',
                rol: 'Alumno'
            },
            {
                cod_usuario: 2,
                user: 'luis.fernandez',
                password: 'password123',
                nombre: 'Luis Fernández',
                email: 'luis.fernandez@colegio.com',
                grado: '4to',
                seccion: 'B',
                rol: 'Alumno'
            },
            {
                cod_usuario: 3,
                user: 'carlos.lopez',
                password: 'password123',
                nombre: 'Carlos López',
                email: 'carlos.lopez@colegio.com',
                grado: '5to',
                seccion: 'B',
                rol: 'Alumno'
            }
        ];
    }
    getProfesores(): Profesor[] {
        return [
          {
            cod_usuario: 4,
            user: 'juan.perez',
            password: 'password123',
            nombre: 'Juan Pérez',
            email: 'juanp@colegio.com',
            rol: 'Profesor',
            asignaciones: [
              { cod_curso: 1, grado: '5to', seccion: 'A' }
            ]
          },
          {
            cod_usuario: 5,
            user: 'luis.gomez',
            password: 'password123',
            nombre: 'Luis Gómez',
            email: 'luisg@colegio.com',
            rol: 'Profesor',
            asignaciones: [
              { cod_curso: 1, grado: '4to', seccion: 'B' }
            ]
          },
          {
            cod_usuario: 6,
            user: 'ana.torres',
            password: 'password123',
            nombre: 'Ana Torres',
            email: 'anat@colegio.com',
            rol: 'Profesora',
            asignaciones: [
              { cod_curso: 2, grado: '6to', seccion: 'A' },
              { cod_curso: 3, grado: '5to', seccion: 'C' }
            ]
          },
          {
            cod_usuario: 7,
            user: 'carlos.diaz',
            password: 'password123',
            nombre: 'Carlos Díaz',
            email: 'carlosd@colegio.com',
            rol: 'Profesor',
            asignaciones: [
              { cod_curso: 3, grado: '6to', seccion: 'B' }
            ]
          },
          {
            cod_usuario: 8,
            user: 'jose.martinez',
            password: 'password123',
            nombre: 'José Martínez',
            email: 'josem@colegio.com',
            rol: 'Profesor',
            asignaciones: [
              { cod_curso: 4, grado: '7mo', seccion: 'A' }
            ]
          }
        ];
      }
    
      getGradosYSecciones(): GradoSeccion[] {
        return [
          { grado: '1ro', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '2do', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '3ro', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '4to', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '5to', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '6to', secciones: ['A', 'B', 'C', 'D'] },
          { grado: '7mo', secciones: ['A'] } 
        ];
      }
    
      getAdmins() {
        return [
            {
                cod_usuario: 9,
                user: 'admin',
                password: 'admin',
                nombre: 'Carlos Díaz',
                email: 'admin',
                rol: 'admin'
            }
        ];
    }
    
    
}