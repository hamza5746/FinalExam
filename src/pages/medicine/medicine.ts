import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {ExpiresPage} from '../expires/expires';

/**
 * Generated class for the MedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})
export class MedicinePage {
    clickedImage;
    options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    medicineDetails={mname:"",quantity:"",date:"",time:"",image:""};
    constructor(public alertCtrl:AlertController,public localNotifications:LocalNotifications, public camera:Camera,public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage');
  }
  Camera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage= 'data:image/jpeg;base64,' + imageData;
      this.medicineDetails=this.clickedImage;
     
    }, (err) => {
      console.log(err);
      alert(err);
     });
  }
  submit(){
    var date = new Date(this.medicineDetails.date+" "+this.medicineDetails.time);
   // console.log(this.medicineDetails);
    //let date=this.medicineDetails.date;
    this.db.list('/medicinedetails').push(this.medicineDetails);
    //alert("Medicine has been reminded");
    this.navCtrl.setRoot(ExpiresPage);
    
    this.localNotifications.schedule({
      //id: 1,
      text: this.medicineDetails.mname+'is expire Please remove it from shelves',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      trigger:{at:date},
      led: 'FF0000',
      data: { }
    });
     let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Notification setup successfully at '+this.medicineDetails.date,
      buttons: ['OK']
    });
    alert.present();
    
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
