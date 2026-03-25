import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalFormValidations } from './signal-form-validations';

describe('SignalFormValidations', () => {
  let component: SignalFormValidations;
  let fixture: ComponentFixture<SignalFormValidations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFormValidations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalFormValidations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
