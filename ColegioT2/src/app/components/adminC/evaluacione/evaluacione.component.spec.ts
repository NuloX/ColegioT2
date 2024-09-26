import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioProfesorComponent } from '../../formulario-profesor/formulario-profesor.component';

import { EvaluacioneComponent } from './evaluacione.component';

describe('EvaluacioneComponent', () => {
  let component: EvaluacioneComponent;
  let fixture: ComponentFixture<EvaluacioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacioneComponent, FormularioProfesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
