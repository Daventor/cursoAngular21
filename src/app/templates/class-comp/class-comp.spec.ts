import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComp } from './class-comp';

describe('ClassComp', () => {
  let component: ClassComp;
  let fixture: ComponentFixture<ClassComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
