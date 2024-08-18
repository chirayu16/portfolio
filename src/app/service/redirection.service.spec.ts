import { RedirectionService } from './redirection.service';
import { TestBed } from '@angular/core/testing';


describe('RedirectionService', () => {
  let service: RedirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
