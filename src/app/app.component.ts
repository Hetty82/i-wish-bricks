import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SetsStore } from './services/sets.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, DrawerComponent, HeaderComponent, MatSidenavModule],
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
