import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SetsStore } from '../services/sets.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatButtonModule, MatIconModule],
  selector: 'app-wish-list',
  styleUrl: './wish-list.component.scss',
  templateUrl: './wish-list.component.html',
})
export class WishListComponent {
  closed = output<void>();

  #store = inject(SetsStore);
  protected readonly sets = this.#store.wishedSetsVm;
  protected readonly total = this.#store.wishedTotal;
}
