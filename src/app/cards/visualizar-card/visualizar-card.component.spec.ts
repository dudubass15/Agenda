import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCardComponent } from './visualizar-card.component';

describe('VisualizarCardComponent', () => {
  let component: VisualizarCardComponent;
  let fixture: ComponentFixture<VisualizarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
