import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
 segment = 0;   
 @ViewChild('slides', { static: true }) slider: IonSlides;   
  constructor(private route: Router) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }  
edit_product() {
    this.route.navigate(['./edit-product']);
  } 
add_product() {
    this.route.navigate(['./add-product']);
  } 
}
