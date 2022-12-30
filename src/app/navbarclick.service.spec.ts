import { TestBed } from '@angular/core/testing';

import { NavbarclickService } from './navbarclick.service';

describe('NavbarclickService', () => {
  let service: NavbarclickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarclickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
