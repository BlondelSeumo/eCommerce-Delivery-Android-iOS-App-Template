import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.page.html',
  styleUrls: ['./new-delivery.page.scss'],
})
export class NewDeliveryPage implements OnInit {
fabAction = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
toggleFab(){
    this.fabAction = !this.fabAction;
   }    
  accepted() {
    this.navCtrl.navigateRoot(['./accepted']);
  } 
}
