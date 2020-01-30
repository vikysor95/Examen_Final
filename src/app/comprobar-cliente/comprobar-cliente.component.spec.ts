import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobarClienteComponent } from './comprobar-cliente.component';

describe('ComprobarClienteComponent', () => {
  let component: ComprobarClienteComponent;
  let fixture: ComponentFixture<ComprobarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
