import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppRootState } from '@app/state';
import { Observable } from 'rxjs';
import { FlashMessage } from '@app/models';
import * as selectors from '@app/state/app.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent implements OnInit {

  messages$: Observable<Array<FlashMessage>>;

  constructor(private store: Store<AppRootState>) { }

  ngOnInit() {
    this.messages$ = this.store.pipe(select(selectors.getMessages));
  }
}
