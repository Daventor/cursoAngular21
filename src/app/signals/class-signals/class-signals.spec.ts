import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSignals } from './class-signals';

describe('ClassSignals', () => {
  let component: ClassSignals;
  let fixture: ComponentFixture<ClassSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
