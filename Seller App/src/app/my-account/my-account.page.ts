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
    
  constructor(@Inject(APP_CONFIG) public config: AppConfig,private route: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

store_profile() {
    this.route.navigate(['./store-profile']);
  } 
insight() {
    this.route.navigate(['./insight']);
  } 
wallet() {
    this.route.navigate(['./wallet']);
  } 
terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  } 
support() {
    this.route.navigate(['./support']);
  }
reviews() {
    this.route.navigate(['./reviews']);
  }
settings() {
    this.route.navigate(['./settings']);
  }
//about_us() {
//    this.route.navigate(['./about-us']);
//  }
//select_language() {
//    this.route.navigate(['./select-language']);
//  }
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
    
// onClick(event){
//    let systemDark = window.matchMedia("(class: night-mode)");
//    systemDark.addListener(this.colorTest);
//    if(event.detail.checked){
//      document.body.setAttribute('class', 'night-mode');
//    }
//    else{
//      document.body.setAttribute('class', 'day-mode');
//    }
//  }
//
//   colorTest(systemInitiatedDark) {
//    if (systemInitiatedDark.matches) { 
//      document.body.setAttribute('class', 'night-mode');		
//    } else {
//      document.body.setAttribute('class', 'day-mode');
//    }
//  }    
}
