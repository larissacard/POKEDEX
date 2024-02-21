import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userAutenticatedGuard } from './user-autenticated.guard';

describe('userAutenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userAutenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
