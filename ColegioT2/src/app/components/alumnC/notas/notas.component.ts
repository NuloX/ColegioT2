import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
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

  evalu= [
    {
      idEva: 1,
      titulo: 'Don Quijote',
      descripcion:"Leer la obra"
    },
    {
      idEva: 2,
      titulo: 'Harry Poter',
      descripcion:"Leer"
    },
    {
      idEva: 3,
      titulo: 'Cenicienta',
      descripcion:"Leer"
    },
    {
      idEva: 4,
      titulo: 'El libro de la selva',
      descripcion:"Leer"
    }
    ]

  notas = {
    cur: this.cur, 
    evalu: this.evalu
  }
    
  getCurso(idEva: number): string {
    const curso = this.cur.find(curso => curso.idCur=== idEva);
    return curso ? curso.nombre : 'No asignada';
  }
    

  constructor(){
  }
}
