import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import {MedicinePage} from '../pages/medicine/medicine';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http';
import {ExpiresPage} from '../pages/expires/expires';
import { LocalNotifications } from '@ionic-native/local-notifications';


const firebaseauth={
  apiKey: "AIzaSyDpcp4jjrAl26PQuf57Qx8hsrNBku4DXEA",
  authDomain: "practice-5f46f.firebaseapp.com",
  databaseURL: "https://practice-5f46f.firebaseio.com",
  projectId: "practice-5f46f",
  storageBucket: "practice-5f46f.appspot.com",
  messagingSenderId: "147818447153"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    MedicinePage,
    ExpiresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseauth),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    MedicinePage,
    ExpiresPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,Contacts,HTTP,LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
