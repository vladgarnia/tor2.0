import { Component, OnInit, Input } from '@angular/core';
import { AppTileBase } from '../tiles.models';

@Component({
  selector: 'app-tile-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class AppTileContainerComponent implements OnInit {

  constructor() { }

  @Input()
  tiles: Array<AppTileBase>;

  innerTiles: Array<AppTileBase>;

  ngOnInit() {
    this.innerTiles = this.tiles.slice(0);
  }
}
