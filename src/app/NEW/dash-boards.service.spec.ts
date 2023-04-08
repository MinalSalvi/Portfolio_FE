import { TestBed } from '@angular/core/testing';

import { DashBoardsService } from './dash-boards.service';

describe('DashBoardsService', () => {
  let service: DashBoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
