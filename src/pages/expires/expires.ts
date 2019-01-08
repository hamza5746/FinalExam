import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';
import {MedicinePage} from '../medicine/medicine';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the ExpiresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expires',
  templateUrl: 'expires.html',
})
export class ExpiresPage {

    showMed:Array<any> = [];
    public itemRef: firebase.database.Reference = firebase.database().ref('/medicinedetails');

  constructor(private localNotifications: LocalNotifications,public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.itemRef.on('value', itemSnapshot => {
    this.showMed = [];
    itemSnapshot.forEach( itemSnap => {
    
      this.showMed.push(itemSnap.val());
      console.log(this.showMed);
      return false;
    });
  });
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpiresPage');
  }
  addmedicne(){
      this.navCtrl.push(MedicinePage);
  }

}
