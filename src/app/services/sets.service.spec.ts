/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { SetsService } from './sets.service';
import { provideHttpClient } from '@angular/common/http';

describe(SetsService.name, () => {
  const arrange = () => {
    TestBed.configureTestingModule({
      providers: [SetsService, provideHttpClient(), provideHttpClientTesting()],
    });

    const httpTesting = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(SetsService);

    return { service, httpTesting };
  };

  it('requests to load sets', async () => {
    // Arrange
    const { service, httpTesting } = arrange();
    const sets = firstValueFrom(service.getSets());

    // Act and assert request
    const req = httpTesting.expectOne(
      '/data/sets.json',
      'Request to load the sets',
    );
    expect(req.request.method).toBe('GET');

    // Act and assert response
    req.flush('mock sets' as any);
    expect(await sets).toEqual('mock sets' as any);

    // Assert outstanding requests
    httpTesting.verify();
  });
});
