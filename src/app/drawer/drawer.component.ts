import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { sets } from '../../assets/data/sets';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  selector: 'app-drawer',
  styleUrl: './drawer.component.scss',
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {
  closed = output<void>();

  // todo: add service to get sets
  // todo: add service to get wishes
  // todo: merge these to into view model
  protected readonly sets = signal(sets);
}
