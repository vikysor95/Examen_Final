import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarvendidasComponent } from './listarvendidas.component';

describe('ListarvendidasComponent', () => {
  let component: ListarvendidasComponent;
  let fixture: ComponentFixture<ListarvendidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarvendidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarvendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
