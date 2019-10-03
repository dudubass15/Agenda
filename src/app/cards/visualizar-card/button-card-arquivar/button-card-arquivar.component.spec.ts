import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardArquivarComponent } from './button-card-arquivar.component';

describe('ButtonCardArquivarComponent', () => {
  let component: ButtonCardArquivarComponent;
  let fixture: ComponentFixture<ButtonCardArquivarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCardArquivarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCardArquivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
