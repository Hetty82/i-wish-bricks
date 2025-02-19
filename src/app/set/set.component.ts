import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Set } from '../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe, MatButtonModule, MatIconModule],
  selector: 'app-set',
  styleUrl: './set.component.scss',
  templateUrl: './set.component.html',
})
export class SetComponent {
  set = input.required<Set>();
}
