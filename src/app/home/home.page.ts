import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
fabAction = false;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  toggleFab(){
      this.fabAction = !this.fabAction;
   }
	
  new_delivery() {
    this.navCtrl.navigateRoot(['./new-delivery']);
  } 
}
