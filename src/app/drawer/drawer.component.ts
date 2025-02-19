import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-drawer',
  styleUrl: './drawer.component.scss',
  templateUrl: './drawer.component.html',
})
export class DrawerComponent {}
