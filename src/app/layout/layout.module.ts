import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './layout.component';
import { AppSharedModule } from '@app/shared';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppLayoutComponent,
    FlashMessageComponent,
    SidebarLinkComponent
  ],
  imports: [AppSharedModule],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
