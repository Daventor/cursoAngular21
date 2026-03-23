import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInputs } from './class-inputs';

describe('ClassInputs', () => {
  let component: ClassInputs;
  let fixture: ComponentFixture<ClassInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
