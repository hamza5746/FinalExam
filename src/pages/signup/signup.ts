import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  registerDetails={ email:"",password:"",repassword:""};
  constructor(public fire:AngularFireAuth,public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async Register(){
    if(this.registerDetails.password==this.registerDetails.repassword)
   {

    try{
       var r= await this.fire.auth.createUserWithEmailAndPassword(this.registerDetails.email,this.registerDetails.password);
       if(r){
        this.db.list('/register').push({
          id:firebase.auth().currentUser.uid,
          email:this.registerDetails.email,
          password:this.registerDetails.password  
        })
        alert("Successfully registered");
        this.navCtrl.pop();
       }
      }catch(error){
      console.log(error);
    }
  }else{
    alert("Password should be same");
  }
  }

}
