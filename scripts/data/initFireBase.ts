import * as Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
/*import "firebase/messagelog"*/

var config = {
    apiKey: "AIzaSyClAFr7Ux7bWPH9G_zeQjLodSiJaOmAkZc",
    authDomain: "test-c348e.firebaseapp.com",
    databaseURL: "https://test-c348e.firebaseio.com",
    projectId: "test-c348e",
    storageBucket: "test-c348e.appspot.com",
    messagingSenderId: "331789185027"
  };

  Firebase.initializeApp( config);