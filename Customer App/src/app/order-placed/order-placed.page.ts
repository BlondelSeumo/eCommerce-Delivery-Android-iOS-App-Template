import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss'],
})
export class OrderPlacedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}
