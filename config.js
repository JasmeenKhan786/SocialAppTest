import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCQep-DPlbq8cwqs4RyOEIRQuinrza4t3s",
    authDomain: "social-app-e3c0b.firebaseapp.com",
    projectId: "social-app-e3c0b",
    storageBucket: "social-app-e3c0b.appspot.com",
    messagingSenderId: "981627652129",
    appId: "1:981627652129:web:dec7a203c51c4c535f7b60"
  };

  // Initialize Firebase
    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

    export default firebase.firestore();

