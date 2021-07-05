import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular'; 
import { ChatCustomerPage } from '../chat-customer/chat-customer.page'; 
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {
  viewType: string;    
  viewTypeB: string;    
  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }
  setViewType(vt) {
    this.viewType = vt;
  }  
  setViewTypeB(vt) {
    this.viewTypeB = vt;
  }    
    
chat_customer(){  
    this.modalController.create({component:ChatCustomerPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
     
}
