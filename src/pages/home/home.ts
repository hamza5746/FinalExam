import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
//import {HttpClient} from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // clickedImage;
  // options: CameraOptions = {
  //   quality: 70,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
    // email;
    // message;
    // chat={email:"",message:""};
    // show;
    // showmessage=[];
    // chatMessages:Array<any> = [];
    // public itemRef: firebase.database.Reference = firebase.database().ref('/messages');
  constructor(public db:AngularFireDatabase,public fire:AngularFireAuth,public navParams: NavParams,public http: HTTP,public navCtrl: NavController,public camera:Camera,public contacts: Contacts) {
  // this.email=fire.auth.currentUser.email;
  // this.itemRef.on('value', itemSnapshot => {
  //   this.chatMessages = [];
  //   itemSnapshot.forEach( itemSnap => {
  //     this.chatMessages.push(itemSnap.val());
  //     return false;
  //   });
  // });  
  // firebase.database().ref().on('value', (snapshot) => {
  //   let result = snapshot.val();
  //   console.log(result.messages);
    
  //   console.log(result["messages"][0]);
  //   for(let k in result){ //"k" provides key Id of each object
  //    this.showmessage.push({
  //     email : result[k].email,
  //     message : result[k].message,
  //     });
  //     }
  //   });
  // var ab=db.list('/messages')
  // .valueChanges();
  //.subscribe((res) => {
  //  console.log(ab);
  //  this.show = res;
  //  console.log(this.show);
    // for(var key in this.show){
    //     this.showmessage.push(this.show);
    // }
    //this.rbook();
   // this.myVar = setTimeout(this.rbook, 3000);
   //});
 
}

  // cam(){
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     //let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.clickedImage= 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //    });
  // }
  // contact(){
  //   let contact: Contact = this.contacts.create();
    
  //   contact.name = new ContactName(null, 'Smith', 'John');
  //   contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
  //   contact.save().then(
  //     () => console.log('Contact saved!', contact),
  //     (error: any) => console.error('Error saving contact.', error)
  //   );
  // }

  // getinfo(){

  //   this.http.get('https://reqres.in/api/users?page=2', {}, {})
  //   .then(data => {
  //     console.log(data)
  //     // console.log(data.status);
  //     // console.log(data.data); // data received by server
  //     // console.log(data.headers);
  
  //   })
  //   .catch(error => {
  
  //     // console.log(error.status);
  //     // console.log(error.error); // error message as string
  //     // console.log(error.headers);
  
  //   });

  // }

  // sendMessage(){
  //   this.chat.email=this.fire.auth.currentUser.email;
  //    console.log(this.chat.message);
  //   this.db.list("/messages").push(this.chat);
  // }
 
  // listPage(){
  //   this.navCtrl.push(ListPage);
  // }
}
