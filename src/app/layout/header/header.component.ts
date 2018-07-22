import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor() { }

  @Output()
  openSidebar: EventEmitter<void> = new EventEmitter();

  @Output()
  logout: EventEmitter<void> = new EventEmitter();

  @Input()
  user: User;

  onLogout() {
    this.logout.emit();
  }

  onOpenSidebar() {
    this.openSidebar.emit();
  }

}
