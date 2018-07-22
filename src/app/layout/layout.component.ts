import { Component, OnInit } from '@angular/core';
import { AppRootState } from '@app/state';
import { Store, select } from '@ngrx/store';
import { User } from '@app/models';
import { Observable } from 'rxjs';
import * as selectors from '@app/state/app.selectors';
import * as actions from '@app/state/app.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store<AppRootState>) {
    this.user$ = this.store.pipe(select(selectors.getUser));
  }

  logout() {
    this.store.dispatch(new actions.Logout());
  }

  ngOnInit() { }
}
