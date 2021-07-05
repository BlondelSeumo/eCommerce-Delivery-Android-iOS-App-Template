import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.page.html',
  styleUrls: ['./set-location.page.scss'],
})
export class SetLocationPage implements OnInit {
fabAction = false;
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
 toggleFab(){
      this.fabAction = !this.fabAction;
   }
  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
    
}
