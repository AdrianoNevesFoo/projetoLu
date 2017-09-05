import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaViewComponent } from './analista-view.component';

describe('AnalistaViewComponent', () => {
  let component: AnalistaViewComponent;
  let fixture: ComponentFixture<AnalistaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalistaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
