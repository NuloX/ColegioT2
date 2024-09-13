import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // manejar la lógica de acuerdo al orden y cómo se recibe del API rest los arrays de objetos
  private chart: Chart | undefined;

  private data: { 
    [key: string]: {
      labels: string[],
      approved: number[],
      disapproved: number[]
    }
  } = {
    inferencial: {
      labels: ["Evaluación 1", "Evaluación 2", "Evaluación 3"],
      approved: [10, 20, 15],
      disapproved: [5, 10, 7]
    },
    critico: {
      labels: ["Evaluación A", "Evaluación B", "Evaluación C"],
      approved: [8, 16, 12],
      disapproved: [6, 9, 5]
    },
    opcion3: {
      labels: ["Evaluación X", "Evaluación Y", "Evaluación Z"],
      approved: [5, 15, 10],
      disapproved: [7, 8, 6]
    }
  };

  ngOnInit(): void {
    
    this.createChart('inferencial'); //cargar datos de manera inicial con inferencial
  }

  
  private createChart(selection: string) {
    const jsonData = this.data[selection];

    if (this.chart) {
      this.chart.destroy(); // destru chart para crear otro si existe uno
    }

    //cofig del gráfico
    this.chart = new Chart("chartline", {
      type: 'bar',
      data: {
        labels: jsonData.labels, //array labels
        datasets: [ //data set debería ser dinámico
          {
            label: 'Aprobados',
            data: jsonData.approved, // data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Desaprobados',
            data: jsonData.disapproved,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  //evento de cambio
  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.createChart(value);
  }
}
