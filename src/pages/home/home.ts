import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }
  openLogInPage(){
    this.navCtrl.push(SignInPage);
  }

}
