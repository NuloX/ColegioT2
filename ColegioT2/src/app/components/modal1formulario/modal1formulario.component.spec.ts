import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal1formularioComponent } from './modal1formulario.component';

describe('Modal1formularioComponent', () => {
  let component: Modal1formularioComponent;
  let fixture: ComponentFixture<Modal1formularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal1formularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal1formularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
