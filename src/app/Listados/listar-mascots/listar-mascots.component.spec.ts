import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMascotsComponent } from './listar-mascots.component';

describe('ListarMascotsComponent', () => {
  let component: ListarMascotsComponent;
  let fixture: ComponentFixture<ListarMascotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMascotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMascotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
