import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUtenteComponent } from './alta-utente.component';

describe('AltaUtenteComponent', () => {
  let component: AltaUtenteComponent;
  let fixture: ComponentFixture<AltaUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
