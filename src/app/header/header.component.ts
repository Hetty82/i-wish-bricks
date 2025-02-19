import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  openWishList = output<void>();

  title = 'I ❤️ bricks';
}
