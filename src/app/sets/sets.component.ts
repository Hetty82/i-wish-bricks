import { Component, signal } from '@angular/core';
import { sets } from '../../assets/data/sets';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sets',
  imports: [CurrencyPipe, MatTableModule],
  templateUrl: './sets.component.html',
  styleUrl: './sets.component.scss',
})
export class SetsComponent {
  // todo: add service to get sets
  // todo: add service to get wishes
  // todo: merge these to into viewmodel
  protected readonly sets = signal(sets);
}
