import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  } 
}
