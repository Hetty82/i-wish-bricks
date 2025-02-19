import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WishListComponent } from './wish-list/wish-list.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SetsStore } from './services/sets.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, WishListComponent, HeaderComponent, MatSidenavModule],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  #store = inject(SetsStore);

  constructor() {
    this.#store.loadSets();
  }
}
