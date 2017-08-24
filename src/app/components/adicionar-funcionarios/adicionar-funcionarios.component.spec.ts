import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFuncionariosComponent } from './adicionar-funcionarios.component';

describe('AdicionarFuncionariosComponent', () => {
  let component: AdicionarFuncionariosComponent;
  let fixture: ComponentFixture<AdicionarFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
