import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the module for Firestore and AngularFire.
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'; // Добавлено

import { AppComponent } from './app.component';

const firebaseConfig = {
  // Replace with your project's API key.
  apiKey: 'AIzaSyAEjPMawRLOUIHYKTY2ep8Dzr9GJqeDvnk',
  authDomain: 'ionic-messenger-e4057.firebaseapp.com',
  projectId: 'ionic-messenger-e4057',
  storageBucket: 'ionic-messenger-e4057.appspot.com',
  messagingSenderId: '604236935140',
  appId: "1:604236935140:web:fa4d829e561197b0eb61f1",
  measurementId: "G-T5LLW7PQYZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    // Initialize AngularFire with configuration options.
    AngularFireModule.initializeApp(firebaseConfig), // Обновлено

    // Import the Firestore module to enable database features.
    FirestoreModule,

    IonicModule.forRoot()
  ],
  
   providers:[],
   bootstrap:[AppComponent]
})
export class AppModule {}
