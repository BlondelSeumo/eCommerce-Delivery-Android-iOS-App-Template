import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
location: string = "home"; 
  constructor(private route: Router) { }

  ngOnInit() {
  }

cart() {
    this.route.navigate(['./cart']);
  } 
stores() {
    this.route.navigate(['./stores']);
  }    
custom_delivery() {
    this.route.navigate(['./custom-delivery']);
  }
}
