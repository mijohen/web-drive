import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  public goToLogin() {
    this.navCtrl.setRoot("LoginPage");
  }

  public goToRegister() {
    this.navCtrl.setRoot("RegisterPage");
  }
}
