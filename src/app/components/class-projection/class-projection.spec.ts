import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProjection } from './class-projection';

describe('ClassProjection', () => {
  let component: ClassProjection;
  let fixture: ComponentFixture<ClassProjection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassProjection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassProjection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
