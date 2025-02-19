import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { sets } from '../../assets/data/sets';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatTableModule],
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
