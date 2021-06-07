import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBecJoiLHpaifA-xcYREjB_n7hS-OhthMM",
    authDomain: "workshop-guappjolotas.firebaseapp.com",
    projectId: "workshop-guappjolotas",
    storageBucket: "workshop-guappjolotas.appspot.com",
    messagingSenderId: "81164694203",
    appId: "1:81164694203:web:23df3340d3393d6616ef9e",
    measurementId: "G-C75X24VFXE"
  };
  

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}