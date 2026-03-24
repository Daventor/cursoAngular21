import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTemplating } from './class-templating';

describe('ClassTemplating', () => {
  let component: ClassTemplating;
  let fixture: ComponentFixture<ClassTemplating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTemplating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTemplating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
