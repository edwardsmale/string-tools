import { TestBed } from '@angular/core/testing';

import { CommandParsingService } from './command-parsing.service';

describe('CommandParsingService', () => {
  let service: CommandParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandParsingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
