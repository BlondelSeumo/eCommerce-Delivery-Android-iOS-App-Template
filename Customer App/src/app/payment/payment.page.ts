import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  pay() {
    this.navCtrl.navigateRoot(['./order-placed']);
  } 
    
}
