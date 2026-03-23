import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProjectionTitle } from './class-projection-title';

describe('ClassProjectionTitle', () => {
  let component: ClassProjectionTitle;
  let fixture: ComponentFixture<ClassProjectionTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassProjectionTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassProjectionTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
