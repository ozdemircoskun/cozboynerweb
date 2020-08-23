import { TestBed } from '@angular/core/testing';

import { UserNoteService } from './usernote.service';

describe('UserNoteService', () => {
  let service: UserNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
