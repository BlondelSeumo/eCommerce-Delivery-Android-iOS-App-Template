import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VariationSelectionPage } from '../variation-selection/variation-selection.page'; 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }


// saved_addresses() {
//    this.route.navigate(['./saved-addresses']);
//  }  
 payment() {
    this.route.navigate(['./payment']);
  }
  variation_selection(){
    this.modalController.create({component:VariationSelectionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
