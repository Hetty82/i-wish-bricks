import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SetsStore } from '../services/sets.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  selector: 'app-drawer',
  styleUrl: './drawer.component.scss',
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  closed = output<void>();

  #store = inject(SetsStore);
  protected readonly sets = this.#store.wishedSetsVm;
  protected readonly total = this.#store.wishedTotal;
}
