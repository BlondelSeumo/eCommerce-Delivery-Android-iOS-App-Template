import { Component, OnInit, Inject } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular'; 
import { BuyappalertPage } from '../app/buyappalert/buyappalert.page'; 
import { APP_CONFIG, AppConfig } from './app.config';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { VtPopupPage } from './vt-popup/vt-popup.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
rtlSide = "left"; 
 public appPages = [
    {
      title: 'home', 
	  image: 'assets/images/ic_menu_home.png', 
      url: '/home',
    },  
     {
      title: 'insight', 
	  image: 'assets/images/ic_menu_insight.png', 
      url: '/insight',
    }, 
     {
      title: 'wallet', 
	  image: 'assets/images/ic_menu_wallet.png', 
      url: '/wallet',
    },  
     {
      title: 'settings', 
	  image: 'assets/images/ic_menu_setting.png', 
      url: '/settings',
    },   
     {
      title: 'terms_conditions', 
	  image: 'assets/images/ic_menu_tncact.png', 
      url: '/terms-conditions',
    },  
     {
      title: 'support', 
	  image: 'assets/images/ic_menu_supportact.png', 
      url: '/support',
    }, 
    {
      title: 'logout', 
	  image: 'assets/images/ic_menu_logoutact.png', 
      url: '/phone-number',
    },
   ]
  
   constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalController: ModalController,
    private translate: TranslateService, private myEvent: MyEvent) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  ngOnInit() {
 if (this.config.demoMode) {
  setTimeout(() => {
    this.presentModal();
  }, 15000)
}
  }

 profile() {
    this.navCtrl.navigateRoot(['./profile']);
  } 
    
buyappalert(){
    this.modalController.create({component:BuyappalertPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }  
developed_by() {
   window.open("https://opuslab.works/", '_system', 'location=no');
 }
 
 async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }     
}
