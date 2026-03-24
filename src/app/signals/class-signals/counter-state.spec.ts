import { TestBed } from '@angular/core/testing';

import { CounterState } from './counter-state';

describe('CounterState', () => {
  let service: CounterState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
