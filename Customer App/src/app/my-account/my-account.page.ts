import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page'; 
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

saved_addresses() {
    this.route.navigate(['./saved-addresses']);
  }
terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  } 
support() {
    this.route.navigate(['./support']);
  }
wallet() {
    this.route.navigate(['./wallet']);
  }
//about_us() {
//    this.route.navigate(['./about-us']);
//  }
settings() {
    this.route.navigate(['./settings']);
  }
phone_number() {
    this.route.navigate(['./phone-number']);
  }  
developed_by() {
   window.open("https://opuslab.works/", '_system', 'location=no');
 }    
buyappalert(){
    this.modalController.create({component:BuyappalertPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }        
}
