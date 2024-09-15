import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfesoresComponent } from './gestion-profesores.component';

describe('GestionProfesoresComponent', () => {
  let component: GestionProfesoresComponent;
  let fixture: ComponentFixture<GestionProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
