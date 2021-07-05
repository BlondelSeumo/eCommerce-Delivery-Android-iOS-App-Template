import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page'; 
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
fabAction = false;
  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }
toggleFab(){
        this.fabAction = !this.fabAction;
   }
chat(){  
    this.modalController.create({component:ChatPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }     
}
