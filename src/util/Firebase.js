import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "firebase/compat/functions";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBfS4YIEpYKCbDJ-A5hG6jKV_RWtXtKT10",
  authDomain: "tabletop-61340.firebaseapp.com",
  projectId: "tabletop-61340",
  storageBucket: "tabletop-61340.appspot.com",
  messagingSenderId: "290508745275",
  appId: "1:290508745275:web:5b8f8a6e03cf9e597eca1e"
});

//auth and firestore references
const db = app.firestore();
const functions = app.functions();
const auth = app.auth();

export {auth, db, firebase, functions};  

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
}

const facebookProvider = new FacebookAuthProvider();

export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
}
