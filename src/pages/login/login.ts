import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage} from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import {MedicinePage} from '../medicine/medicine';
import {ExpiresPage} from '../expires/expires';
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDetails={email:"",password:""};

  medicineDetails={mname:"",quantity:"",date:"",time:"",image:""};
  
  showreg:Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref('/register');

  constructor(public db: AngularFireDatabase,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
   
    this.itemRef.on('value', itemSnapshot => {
      this.showreg = [];
      itemSnapshot.forEach( itemSnap => {
      
        this.showreg.push(itemSnap.val());
        console.log(this.showreg);
        return false;
      });
    });  
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.navCtrl.push(SignupPage);
  }
  async login(){
    try{
    
      var r= this.fire.auth.signInWithEmailAndPassword(this.loginDetails.email,this.loginDetails.password);
      if(r){
              this.navCtrl.setRoot(ExpiresPage,this.fire.auth.currentUser.email);
            
            
        
        //alert("Email and Password should be Correct");
        //this.navCtrl.setRoot(LoginPage);
        
      }else{
        alert("Email and Password should be Correct");
      }
//      this.navCtrl.push(HomePage);
    }catch(error){
      console.log(error);
    }
  }
}
