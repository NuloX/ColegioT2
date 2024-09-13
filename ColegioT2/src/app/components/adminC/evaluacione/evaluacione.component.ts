import { Component } from '@angular/core';
import { ButtonComponent } from '../../recursos/button/button.component';

@Component({
  selector: 'app-evaluacione',
  standalone: true,
  imports: [[ButtonComponent]],
  templateUrl: './evaluacione.component.html',
  styleUrls: ['./evaluacione.component.css']
})
export class EvaluacioneComponent {
}
