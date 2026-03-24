import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEvents } from './class-events';

describe('ClassEvents', () => {
  let component: ClassEvents;
  let fixture: ComponentFixture<ClassEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
