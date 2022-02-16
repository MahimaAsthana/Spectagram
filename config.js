import firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAh_tcl1uBG72zmb3q-vOO6U7o6U4M6ueQ",
  authDomain: "spectagram-a0794.firebaseapp.com",
  projectId: "spectagram-a0794",
  storageBucket: "spectagram-a0794.appspot.com",
  messagingSenderId: "392997771167",
  appId: "1:392997771167:web:6e2b89287b8594da7c8faa"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  } 
else {
    firebase.app();
}

export default firebase.database();

/*
import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAh_tcl1uBG72zmb3q-vOO6U7o6U4M6ueQ",
  authDomain: "spectagram-a0794.firebaseapp.com",
  projectId: "spectagram-a0794",
  storageBucket: "spectagram-a0794.appspot.com",
  messagingSenderId: "392997771167",
  appId: "1:392997771167:web:6e2b89287b8594da7c8faa"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider() */
  