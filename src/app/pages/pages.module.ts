import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages.router';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    PagesRoutingModule,
    AppSharedModule
  ]
})
export class PagesModule { }
