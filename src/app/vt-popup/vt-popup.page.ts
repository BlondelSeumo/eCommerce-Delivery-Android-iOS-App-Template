import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vt-popup',
  templateUrl: './vt-popup.page.html',
  styleUrls: ['./vt-popup.page.scss'],
})
export class VtPopupPage implements OnInit {
  loading: any;
  loadingShown: boolean;
  email_Id: string = '';
  private isLoading: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private modalController: ModalController,
    private http: HttpClient, private toastController: ToastController, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onSubscribe() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
      return this.presentToast('Please provide your Email.')
    }
    this.presentLoading('Sending...')
    let req = {
      "email": this.email_Id,
      "source": "opus_application_delivoo"
    }
    this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
      this.presentToast('Submitted successfully.')
      this.modalController.dismiss();
      this.dismissLoading();
    })
  }

  presentToast(body: string, position?: string, duration?: number) {
    this.toastController.create({
      message: body,
      duration: (duration && duration > 0) ? duration : 2000,
      position: (position && (position == "top" || position == "middle")) ? position : 'bottom'
    }).then(toast => toast.present());
  }


  async presentLoading(body: string) {
    this.isLoading = true;
    return await this.loadingController.create({ message: body }).then(overlay => {
      overlay.present().then(() => {
        if (!this.isLoading) {
          try {
            overlay.dismiss().then(() => console.log('loading aborted'));
          } catch (error) {
            console.log(error);
          }
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    try {
      return await this.loadingController.dismiss();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
