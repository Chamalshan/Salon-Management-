import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvrvUzdZpD3gUwkxuMONy1hHj7DVn5OuA",
  authDomain: "abcd-eef36.firebaseapp.com",
  projectId: "abcd-eef36",
  storageBucket: "abcd-eef36.appspot.com",
  messagingSenderId: "122130539022",
  appId: "1:122130539022:web:0f579dbe57a2fb992a125f"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };