import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUhGxTrTnr8fwS68dYp4ObCEUvl6XXWuE",
    authDomain: "guajolotas-9d254.firebaseapp.com",
    projectId: "guajolotas-9d254",
    storageBucket: "guajolotas-9d254.appspot.com",
    messagingSenderId: "353052224999",
    appId: "1:353052224999:web:9a1b270a88e9546ac3a142"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }