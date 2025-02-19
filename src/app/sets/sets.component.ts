import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SetComponent } from '../set/set.component';
import { SetsStore } from '../services/sets.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, SetComponent],
  selector: 'app-sets',
  styleUrl: './sets.component.scss',
  templateUrl: './sets.component.html',
})
export class SetsComponent {
  #store = inject(SetsStore);
  protected readonly sets = this.#store.setsVm;

  protected updateWish(setNumber: number, add: 1 | -1) {
    this.#store.updateWishes(setNumber, add);
  }
}
