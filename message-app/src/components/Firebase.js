import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDUBm1UzFWMIpltKi6mtR3C1BL4SCKKhEI',
  authDomain: 'messymessenger-a37fc.firebaseapp.com',
  databaseURL: 'https://messymessenger-a37fc.firebaseio.com',
  projectId: 'messymessenger-a37fc',
  storageBucket: 'messymessenger-a37fc.appspot.com',
  messagingSenderId: '263629509600',
  appId: '1:263629509600:web:2ca9ab026bd97b1a459185',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//user config file
var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

let db = firebase.firestore();
let auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, auth, timestamp, uiConfig };
