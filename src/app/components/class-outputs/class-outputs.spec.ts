import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassOutputs } from './class-outputs';

describe('ClassOutputs', () => {
  let component: ClassOutputs;
  let fixture: ComponentFixture<ClassOutputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassOutputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassOutputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
