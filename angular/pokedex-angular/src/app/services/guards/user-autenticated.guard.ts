import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { inject } from '@angular/core';

export const userAutenticatedGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isUserAutenticated();
};
