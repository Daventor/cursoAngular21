import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayStepper } from './delay-stepper';

describe('DelayStepper', () => {
  let component: DelayStepper;
  let fixture: ComponentFixture<DelayStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayStepper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayStepper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
