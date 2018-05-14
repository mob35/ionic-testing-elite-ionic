import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  public data: any = {};
  credentials: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, ) {
    this.credentials = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
    this.username = this.credentials.controls['username'];
    this.password = this.credentials.controls['password'];
  }
}
