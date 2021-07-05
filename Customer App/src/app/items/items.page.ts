import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VariationSelectionPage } from '../variation-selection/variation-selection.page'; 
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
 segment = 0;   
 @ViewChild('slides', { static: true }) slider: IonSlides;   
  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }       
  cart() {
    this.route.navigate(['./cart']);
  } 
 reviews() {
    this.route.navigate(['./reviews']);
  }
  variation_selection(){
    this.modalController.create({component:VariationSelectionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }     
}
