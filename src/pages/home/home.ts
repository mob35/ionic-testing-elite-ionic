import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title: String;
  constructor(public navCtrl: NavController) {
    this.title = 'My Page';

  }
  changeTitle(title) {
    this.title = title;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
