import { TestBed, inject } from '@angular/core/testing';

import { FirebaseConfigService } from './firebase-config.service';

describe('FirebaseConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseConfigService]
    });
  });

  it('should ...', inject([FirebaseConfigService], (service: FirebaseConfigService) => {
    expect(service).toBeTruthy();
  }));
});
