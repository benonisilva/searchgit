/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BasicUserInfoService } from '../api-gen/services';
import { SearchApiService } from './search-api.service';

describe('Service: SearchApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchApiService,
        {
          provide: BasicUserInfoService,
          useValue: {

          }
        }
      ]
    });
  });

  it('should ...', inject([SearchApiService], (service: SearchApiService) => {
    expect(service).toBeTruthy();
  }));
});
