import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLifecycle } from './class-lifecycle';

describe('ClassLifecycle', () => {
  let component: ClassLifecycle;
  let fixture: ComponentFixture<ClassLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassLifecycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
