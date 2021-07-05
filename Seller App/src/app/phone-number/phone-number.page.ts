import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
register() {
    this.route.navigate(['./register']);
  } 
}
