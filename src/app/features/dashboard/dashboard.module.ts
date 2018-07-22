import { NgModule } from '@angular/core';
import { AppDashboardComponent } from './dashboard.component';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [AppDashboardComponent],
  imports: [AppSharedModule]
})
export class AppDashboardModule { }
