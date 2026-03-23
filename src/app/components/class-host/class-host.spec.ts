import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassHost } from './class-host';

describe('ClassHost', () => {
  let component: ClassHost;
  let fixture: ComponentFixture<ClassHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassHost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
