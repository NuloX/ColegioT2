import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../../recursos/button/button.component';

import { EvaluacioneComponent } from './evaluacione.component';

describe('EvaluacioneComponent', () => {
  let component: EvaluacioneComponent;
  let fixture: ComponentFixture<EvaluacioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacioneComponent, ButtonComponent]
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
