import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

add_money() {
    this.route.navigate(['./add-money']);
  }
}
