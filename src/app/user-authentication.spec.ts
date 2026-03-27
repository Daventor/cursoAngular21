import { TestBed } from '@angular/core/testing';

import { UserAuthentication } from './user-authentication';
import { shareReplay } from 'rxjs';
import { Mocked } from 'vitest';

describe('UserAuthentication', () => {
  let service: UserAuthentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false on isLoggedIn', () => {
    expect(service.isLoggedIn()).toBe(false);
  })
});

describe('UserAuthentication with spy', () => {
  let service: UserAuthentication;
  let serviceSpy: Mocked<UserAuthentication>;

  beforeEach(() => {
    const spy: Mocked<UserAuthentication> = {
      isLoggedIn: vi.fn().mockReturnValue(true),
      logout: vi.fn()
    }

    TestBed.configureTestingModule({
      providers: [UserAuthentication, { provide: UserAuthentication, useValue: spy}]
    })

    service = TestBed.inject(UserAuthentication);
    serviceSpy = TestBed.inject(UserAuthentication) as Mocked<UserAuthentication>
  })

  it('logout should return from a spy', () => {
    serviceSpy.isLoggedIn.mockReturnValue(true);
    serviceSpy.logout.mockReturnValue();

    expect(service.isLoggedIn(), 'Service returned stub value').toBe(true);
    expect(serviceSpy.isLoggedIn.mock.results.at(-1)?.value).toBe(true);
  })
})
