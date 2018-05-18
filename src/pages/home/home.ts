import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  language: string = "en";

  constructor(public navCtrl: NavController, private translateService: TranslateService ) {
    translateService.setDefaultLang("en");
    translateService.use("en")
  }

  setLang(){
    console.log(this.language);
    this.translateService.use(this.language);
  }

}
