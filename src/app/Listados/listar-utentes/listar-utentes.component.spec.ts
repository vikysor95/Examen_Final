import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUtentesComponent } from './listar-utentes.component';

describe('ListarUtentesComponent', () => {
  let component: ListarUtentesComponent;
  let fixture: ComponentFixture<ListarUtentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUtentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUtentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
