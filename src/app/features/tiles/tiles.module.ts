import { NgModule } from '@angular/core';
import { AppTileContainerComponent } from './container/container.component';
import { AppDynamicTileComponent, HtmlTileComponent } from './tile-types';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AppTileContainerComponent,
    AppDynamicTileComponent,
    HtmlTileComponent
  ],
  imports: [
    AppSharedModule
  ]
})
export class AppTileModule { }
