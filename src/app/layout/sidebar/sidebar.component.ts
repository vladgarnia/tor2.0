import { Component, OnInit } from '@angular/core';
import { sidebarLinks } from './sidebar.links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  sidebarLinks = [];

  ngOnInit() {
    this.sidebarLinks = sidebarLinks.slice(0);
  }

}
