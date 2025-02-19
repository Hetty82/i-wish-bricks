import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { getTestBed } from '@angular/core/testing';
import { ngMocks } from 'ng-mocks';

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
);

// Setup NgMocks
ngMocks.autoSpy('jasmine');

// Never mock Angular Material components
ngMocks.globalKeep(MatBadge, true);
ngMocks.globalKeep(MatButton, true);
ngMocks.globalKeep(MatIcon, true);
ngMocks.globalKeep(MatSidenav, true);
ngMocks.globalKeep(MatSidenavContainer, true);
