import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal2formularioComponent } from './modal2formulario.component';

describe('Modal2formularioComponent', () => {
  let component: Modal2formularioComponent;
  let fixture: ComponentFixture<Modal2formularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal2formularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal2formularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
