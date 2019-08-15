import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommitmentComponent } from './form-commitment.component';

describe('FormCommitmentComponent', () => {
  let component: FormCommitmentComponent;
  let fixture: ComponentFixture<FormCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
