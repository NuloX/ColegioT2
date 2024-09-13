import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evaluacione',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './evaluacione.component.html',
  styleUrl: './evaluacione.component.css'
})
export class EvaluacioneComponent {
  cur= [
    {
    idCur: 1,
    nombre: 'Plan lector',
    descripcion: 'Curso enfocado a la comprension lectora de los niños',
    idSa: 1
  },
  {
    idCur: 2,
    nombre: 'Literatura',
    descripcion: 'Curso a las obras literarias',
    idSa: 1
  },
  {
    idCur: 3,
    nombre: 'Redacción',
    descripcion: 'Curso enfocado a la redaccion',
    idSa: 2
  },
  {
    idCur: 4,
    nombre: 'Plan lector',
    descripcion: 'Curso enfocado a la comprension lectora de los niños',
    idSa: 3
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

  grado = [
    {
      idGrado: 1,
      anho: 1,
      idAu: 1
    },
    {
      idGrado: 2,
      anho: 2,
      idAu: 2
    },
    {
      idGrado: 3,
      anho: 3,
      idAu: 3
    },
  ]

  evaluaciones = {
    cur: this.cur, 
    aulas: this.aulas,
    evalu: this.evalu,
    grado: this.grado
  }
    
  getSalon(idSa: number): string {
    const aulas = this.aulas.find(aulas => aulas.idA=== idSa);
    return aulas ? aulas.nombreA : 'No asignada';
  }
    

  constructor(){
  }
}
