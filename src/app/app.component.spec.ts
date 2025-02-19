import { MockComponent } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavHarness } from '@angular/material/sidenav/testing';
import { SetsStore } from './services/sets.store';
import { WishListComponent } from './wish-list/wish-list.component';
import { getChildComponent } from '../test/element.helpers';

describe('AppComponent', () => {
  const arrange = () => {
    const setsStore = {
      loadSets: jasmine.createSpy('loadSets'),
      // loadSets: jasmine.createSpy('loadSets').and.returnValue(EMPTY),
    };

    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        MockComponent(HeaderComponent),
        MockComponent(WishListComponent),
      ],
      providers: [
        {
          provide: SetsStore,
          useValue: setsStore,
        },
      ],
    });
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const loader = TestbedHarnessEnvironment.loader(fixture);

    return { component, fixture, loader, store: setsStore };
  };

  describe('child components', () => {
    // Test Angular Material with harnesses ❤️
    it('renders header component that toggles the sidenav', async () => {
      // Arrange
      const { fixture, loader } = arrange();
      const sidenav = await loader.getHarness(MatSidenavHarness);

      // Assert initial
      expect(await sidenav.isOpen()).toBe(false);

      // Act open
      const header = getChildComponent(fixture, HeaderComponent);
      header.openWishList.emit();

      // Assert open
      expect(await sidenav.isOpen()).toBe(true);

      // Act toggle
      header.openWishList.emit();

      // Assert open
      expect(await sidenav.isOpen()).toBe(false);
    });

    // Test if the mock is there and if output works
    it('renders wishlist component', async () => {
      // Arrange
      const { fixture, loader } = arrange();
      const sidenav = await loader.getHarness(MatSidenavHarness);
      const header = getChildComponent(fixture, HeaderComponent);
      header.openWishList.emit();

      // Assert initial
      expect(await sidenav.isOpen()).toBe(true);

      // Act
      const wishList = getChildComponent(fixture, WishListComponent);
      wishList.closed.emit();

      // Assert
      expect(await sidenav.isOpen()).toBe(false);
    });
  });

  it('requests to load', () => {
    // Arrange
    const { store } = arrange();

    // Assert
    expect(store.loadSets).toHaveBeenCalledTimes(1);
  });
});
