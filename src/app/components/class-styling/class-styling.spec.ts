import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyling } from './class-styling';

describe('ClassStyling', () => {
  let component: ClassStyling;
  let fixture: ComponentFixture<ClassStyling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassStyling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassStyling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
