import { TestBed } from '@angular/core/testing';

import { UserIpoListService } from './user-ipo-list.service';

describe('UserIpoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserIpoListService = TestBed.get(UserIpoListService);
    expect(service).toBeTruthy();
  });
});
