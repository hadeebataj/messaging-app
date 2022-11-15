import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLGs70hpI80jVGIeOsAL56KDdMtLtrL1E",
  authDomain: "messaging-app-521d6.firebaseapp.com",
  projectId: "messaging-app-521d6",
  storageBucket: "messaging-app-521d6.appspot.com",
  messagingSenderId: "942317575237",
  appId: "1:942317575237:web:7f3eeeb05de38241fe572c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebase.firestore(app);

const auth = firebase.auth(app);
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
