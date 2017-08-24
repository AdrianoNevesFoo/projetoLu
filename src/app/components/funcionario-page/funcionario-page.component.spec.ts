import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioPageComponent } from './funcionario-page.component';

describe('FuncionarioPageComponent', () => {
  let component: FuncionarioPageComponent;
  let fixture: ComponentFixture<FuncionarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
