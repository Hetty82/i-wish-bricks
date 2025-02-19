import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { Set, SetVm, Wishes } from '../models';
import { LocalStorageService } from './local-storage.service';
import { SetsService } from './sets.service';

// Note: I am a big fan of NgRx Store and the Redux pattern. But that would
// have been real overkill here. This was an excellent opportunity to try out
// the NgRx SignalStore and I think it fits very well.

interface SetsState {
  sets: Set[];
  isLoading: boolean;
  hasLoaded: boolean;
  wishes: Wishes;
}

const initialState: SetsState = {
  sets: [],
  isLoading: false,
  hasLoaded: false,
  wishes: {},
};

const localStorageKey = 'wishes';

export const SetsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ sets, wishes }) => ({
    wishCount: computed(() => {
      const validWishes = Object.entries(wishes()).filter(([setNumber]) => {
        return sets().some((set) => set.number === +setNumber);
      });
      const count = validWishes.reduce(
        (total, [, wished]) => total + wished,
        0,
      );
      return count;
    }),
    setsVm: computed(() => {
      return sets().map((set: Set): SetVm => {
        const wished = wishes()[set.number] || 0;

        return {
          ...set,
          wished,
          wishPrice: set.price * wished,
        };
      });
    }),
  })),
  // Need a second withComputed to access the view models here
  withComputed(({ setsVm }) => ({
    wishedSetsVm: computed(() => setsVm().filter((set) => set.wished)),
    wishedTotal: computed(() =>
      setsVm().reduce((total, set) => {
        return total + set.wished * set.price;
      }, 0),
    ),
  })),
  withMethods(
    (
      store,
      setsService = inject(SetsService),
      localStorageService = inject(LocalStorageService),
    ) => ({
      updateWishes(setNumber: number, add: 1 | -1): void {
        const wishes = store.wishes();
        const newWishAmount = (wishes[setNumber] || 0) + add;
        const newWishes: Wishes = {
          ...wishes,
          [setNumber]: Math.max(0, newWishAmount),
        };

        localStorageService.setItem(localStorageKey, newWishes);

        patchState(store, () => {
          return { wishes: newWishes };
        });
      },
      async loadSets(): Promise<void> {
        if (store.hasLoaded() || store.isLoading()) {
          return;
        }

        const wishes =
          localStorageService.getItem<Wishes>(localStorageKey) || [];

        patchState(store, { isLoading: true });

        const sets = await firstValueFrom(setsService.getSets());
        patchState(store, { sets, isLoading: false, hasLoaded: true, wishes });
      },
    }),
  ),
);
