import {
  Component, OnInit, ViewChild, ViewContainerRef, Input,
  ReflectiveInjector, ComponentFactoryResolver
} from '@angular/core';
import { AppTileBase, AppTileTypes } from '../tiles.models';
import { HtmlTileComponent } from './html/html.component';

@Component({
  selector: 'app-dynamic-tile',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: []
})
export class AppDynamicTileComponent implements OnInit {
  constructor(private resolver: ComponentFactoryResolver) { }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input()
  tile: AppTileBase;

  ngOnInit() {
    const inputProviders = [{
      provide: 'tile',
      useValue: this.tile
    }];

    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    let factory = null;

    // switch case
    switch (this.tile.type) {
      default:
        factory = this.resolver.resolveComponentFactory(HtmlTileComponent);
    }

    const component = factory.create(injector);
    this.dynamicComponentContainer.insert(component.hostView);
  }
}
