import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarLinkComponent {

  constructor() { }

  @Input()
  label: string;

  @Input()
  path: Array<string>;

  @Input()
  icon: string;
}
