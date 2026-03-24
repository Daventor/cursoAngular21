import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReferencing } from './class-referencing';

describe('ClassReferencing', () => {
  let component: ClassReferencing;
  let fixture: ComponentFixture<ClassReferencing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassReferencing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassReferencing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
