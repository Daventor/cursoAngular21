import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFlow } from './class-flow';

describe('ClassFlow', () => {
  let component: ClassFlow;
  let fixture: ComponentFixture<ClassFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
