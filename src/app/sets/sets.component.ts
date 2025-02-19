import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { sets } from '../../assets/data/sets';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatIconModule, MatButtonModule, MatTableModule],
  selector: 'app-sets',
  styleUrl: './sets.component.scss',
  templateUrl: './sets.component.html',
})
export class SetsComponent {
  // todo: add service to get sets
  // todo: add service to get wishes
  // todo: merge these to into viewmodel
  protected readonly sets = signal(sets);
}
