import firebase from 'firebase'
import "firebase/firestore"
import "firebase/analytics"
import "firebase/auth"
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_dWMK9Oo3osLVlRE_MDm5ez3iEjwFr2A",
    authDomain: "msp-asu.firebaseapp.com",
    projectId: "msp-asu",
    storageBucket: "msp-asu.appspot.com",
    messagingSenderId: "373530449384",
    appId: "1:373530449384:web:33ad1d9b5d32336918c05d",
    measurementId: "G-7CLHMGZQ9W"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    
 }else {
    firebase.app(); // if already initialized, use that one
 }
 let analytics;
 
 if(typeof window != 'undefined'){
 analytics=  firebase.analytics()
}
const db = firebase.firestore();
const auth = firebase.auth()
const storage = firebase.storage()
var provider = new firebase.auth.GoogleAuthProvider();
  export {provider,db,auth, analytics, storage ,firebase as default};