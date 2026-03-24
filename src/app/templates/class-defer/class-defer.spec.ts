import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDefer } from './class-defer';

describe('ClassDefer', () => {
  let component: ClassDefer;
  let fixture: ComponentFixture<ClassDefer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDefer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDefer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
