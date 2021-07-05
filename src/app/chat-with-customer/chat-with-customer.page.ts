import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-with-customer',
  templateUrl: './chat-with-customer.page.html',
  styleUrls: ['./chat-with-customer.page.scss'],
})
export class ChatWithCustomerPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss(){
   this.modalController.dismiss();
 }
}
