import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProjectionBody } from './class-projection-body';

describe('ClassProjectionBody', () => {
  let component: ClassProjectionBody;
  let fixture: ComponentFixture<ClassProjectionBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassProjectionBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassProjectionBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
