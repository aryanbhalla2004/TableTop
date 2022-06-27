
import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBfS4YIEpYKCbDJ-A5hG6jKV_RWtXtKT10",
  authDomain: "tabletop-61340.firebaseapp.com",
  projectId: "tabletop-61340",
  storageBucket: "tabletop-61340.appspot.com",
  messagingSenderId: "290508745275",
  appId: "1:290508745275:web:5b8f8a6e03cf9e597eca1e"
});

const auth = app.auth();

export {firebase, auth};