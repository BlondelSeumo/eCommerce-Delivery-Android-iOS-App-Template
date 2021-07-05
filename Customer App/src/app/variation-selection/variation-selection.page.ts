import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-variation-selection',
  templateUrl: './variation-selection.page.html',
  styleUrls: ['./variation-selection.page.scss'],
})
export class VariationSelectionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
 dismiss(){
   this.modalController.dismiss();
 }
}
