import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyDlkK4R-PkWpGH9tmxmzuKuHBohcImSUoA",
      authDomain: "jta-instagram-clone-6575f.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-6575f.firebaseio.com",
      projectId: "jta-instagram-clone-6575f",
      storageBucket: "jta-instagram-clone-6575f.appspot.com",
      messagingSenderId: "1073472745468"
    };

    firebase.initializeApp(config)
  }
}
