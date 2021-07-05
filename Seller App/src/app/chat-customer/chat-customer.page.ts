import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-customer',
  templateUrl: './chat-customer.page.html',
  styleUrls: ['./chat-customer.page.scss'],
})
export class ChatCustomerPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss(){
   this.modalController.dismiss();
 }
}
