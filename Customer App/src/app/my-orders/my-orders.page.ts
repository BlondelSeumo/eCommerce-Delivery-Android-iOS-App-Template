import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  order_detail() {
    this.route.navigate(['./order-detail']);
  }  
  add_review() {
    this.route.navigate(['./add-review']);
  }
}
