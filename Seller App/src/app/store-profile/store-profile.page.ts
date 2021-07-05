import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.page.html',
  styleUrls: ['./store-profile.page.scss'],
})
export class StoreProfilePage implements OnInit {
store_category: string = "1";
  constructor(private route: Router) { }

  ngOnInit() {
  }

set_location() {
    this.route.navigate(['./set-location']);
  } 
}
