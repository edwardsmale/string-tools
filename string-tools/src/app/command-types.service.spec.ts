import { TestBed } from '@angular/core/testing';

import { CommandTypesService } from './command-types.service';

describe('CommandTypesService', () => {
  let service: CommandTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
