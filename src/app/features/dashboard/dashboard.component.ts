import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit {

  constructor() { }
  title = 'Welcome to TOR 2.0';

  ngOnInit() {

  }

}
