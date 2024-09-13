import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  
  cur= [
    {
    idCur: 1,
    nombre: 'Plan lector',
    descripcion: 'Curso enfocado a la comprension lectora de los niños'
  },
  {
    idCur: 2,
    nombre: 'Literatura',
    descripcion: 'Curso a las obras literarias'
  },
  {
    idCur: 3,
    nombre: 'Redacción',
    descripcion: 'Curso enfocado a la redaccion'
  },
  {
    idCur: 4,
    nombre: 'Plan lector',
    descripcion: 'Curso enfocado a la comprension lectora de los niños'
  }
  ]
  
  aulas= [
  {
    idA: 1,
    nombreA: 'Humildad',
  },
  {
    idA: 2,
    nombreA: 'Responsabilidad',
  },
  {
    idA: 3,
    nombreA: 'Atención',
  },
  {
    idA: 4,
    nombreA: 'Generosidad',
  }
  ]

  cursos = {
    cur: this.cur, 
    aulas: this.aulas
  }
    
  getAulaNombre(idCur: number): string {
    const aula = this.aulas.find(aula => aula.idA=== idCur);
    return aula ? aula.nombreA : 'No asignada';
  }
    

  constructor(){
  }
}
