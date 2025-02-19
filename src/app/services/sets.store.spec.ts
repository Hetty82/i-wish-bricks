import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';

import { Set, SetVm, Theme, Wishes } from '../models';
import { LocalStorageService } from './local-storage.service';
import { SetsService } from './sets.service';
import { SetsStore } from './sets.store';

// note: no time to test everything, but a few test to show my approach

describe('SetsStore', () => {
  const arrange = () => {
    const mock = {
      sets: [
        {
          name: 'Viking Village',
          number: 21343,
          pieceCount: 2103,
          theme: Theme.Ideas,
          price: 139.99,
        },
        {
          name: 'Sandcrawler',
          number: 75059,
          pieceCount: 3296,
          theme: Theme.StarWars,
          price: 299.99,
        },
      ] as Set[],
      wishes: {
        1234: 12,
        75059: 2,
      },
    };

    const sets$ = new Subject<Set[]>();
    const setsService = {
      getSets: jasmine.createSpy('getSets').and.returnValue(sets$),
    };
    const localStorageService = {
      setItem: jasmine.createSpy('setItem'),
      getItem: jasmine.createSpy('getItem').and.returnValue(mock.wishes),
    };

    const stub = {
      localStorageService,
      sets$,
      setsService,
    };

    TestBed.configureTestingModule({
      providers: [
        MockProvider(SetsService, setsService),
        MockProvider(LocalStorageService, localStorageService),
      ],
    });

    const store = TestBed.inject(SetsStore);
    return { store, stub, mock };
  };

  it('creates the store with initial values', () => {
    // Arrange
    const { store } = arrange();

    // Assert
    expect(store.sets()).toEqual([]);
    expect(store.hasLoaded()).toBeFalse();
    expect(store.isLoading()).toBeFalse();
    expect(store.wishes()).toEqual({});
  });

  it('fills the store with loaded sets', fakeAsync(() => {
    // Arrange
    const { store, stub, mock } = arrange();

    // Act
    store.loadSets();

    // Assert
    expect(stub.setsService.getSets).toHaveBeenCalledTimes(1);
    expect(stub.localStorageService.getItem).toHaveBeenCalledOnceWith('wishes');
    expect(store.sets().length).toBe(0);
    expect(store.isLoading()).toBeTrue();

    // Act loaded
    stub.sets$.next(mock.sets);
    tick();

    // Assert loaded
    expect(store.sets()).toBe(mock.sets);
    expect(store.wishes()).toBe(mock.wishes);
    expect(store.hasLoaded()).toBeTrue();
    expect(store.isLoading()).toBeFalse();

    // Assert computed
    expect(store.wishCount()).toBe(2); // Only count existing sets
    const expected: SetVm[] = [
      {
        name: 'Viking Village',
        number: 21343,
        pieceCount: 2103,
        theme: Theme.Ideas,
        price: 139.99,
        wished: 0,
        wishPrice: 0,
      },
      {
        name: 'Sandcrawler',
        number: 75059,
        pieceCount: 3296,
        theme: Theme.StarWars,
        price: 299.99,
        wished: 2,
        wishPrice: 599.98,
      },
    ];
    expect(store.setsVm()).toEqual(expected);
  }));

  it('updates wishes and saves to local storage', fakeAsync(() => {
    // Arrange
    const { store, stub, mock } = arrange();
    store.loadSets();
    stub.sets$.next(mock.sets);
    tick();

    // Assert initial
    expect(store.sets()).toBe(mock.sets);
    expect(store.wishes()).toEqual(mock.wishes);

    // Act
    store.updateWishes(75059, 1);

    // Assert
    const expected: Wishes = {
      1234: 12,
      75059: 3, // <-- updated
    };
    expect(stub.localStorageService.setItem).toHaveBeenCalledOnceWith(
      'wishes',
      expected,
    );
    expect(store.wishes()).toEqual(expected);
  }));
});
