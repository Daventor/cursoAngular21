import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templating } from './templating';

describe('Templating', () => {
  let component: Templating;
  let fixture: ComponentFixture<Templating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
