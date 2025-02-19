import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SetComponent } from '../set/set.component';
import { sets } from '../../assets/data/sets';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, SetComponent],
  selector: 'app-sets',
  styleUrl: './sets.component.scss',
  templateUrl: './sets.component.html',
})
export class SetsComponent {
  // todo: add service to get sets
  // todo: add service to get wishes
  // todo: merge these to into view model
  protected readonly sets = signal(sets);
}
