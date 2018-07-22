import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagesRoutingModule } from './pages.router';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    PagesRoutingModule,
    AppSharedModule
  ]
})
export class PagesModule { }
