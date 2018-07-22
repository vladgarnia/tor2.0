import { Component } from '@angular/core';
import { AppRootState } from '@app/state';
import { Store } from '@ngrx/store';
import * as actions from '@app/state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppRootState>) {
    this.store.dispatch(new actions.Initialize());
  }
}
