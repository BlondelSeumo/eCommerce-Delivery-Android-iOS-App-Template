import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.page.html',
  styleUrls: ['./insight.page.scss'],
})
export class InsightPage implements OnInit {
 time: string = "1"; 
  constructor() { }

  ngOnInit() {
  }

}
