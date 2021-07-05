import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delivered-succesfully',
  templateUrl: './delivered-succesfully.page.html',
  styleUrls: ['./delivered-succesfully.page.scss'],
})
export class DeliveredSuccesfullyPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  home() {
     this.navCtrl.navigateRoot(['./home']);
  } 
 insight() {
     this.navCtrl.navigateRoot(['./insight']);
  }
}
