import { TestBed } from '@angular/core/testing';

import { AuthenticateSessionService } from './authenticate-session.service';

describe('AuthenticateSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateSessionService = TestBed.get(AuthenticateSessionService);
    expect(service).toBeTruthy();
  });
});
