import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBX_FIYTqMJxFXg4LdYNnT9UJeF9v127y4",
    authDomain: "quora-338a4.firebaseapp.com",
    projectId: "quora-338a4",
    storageBucket: "quora-338a4.appspot.com",
    messagingSenderId: "853700658162",
    appId: "1:853700658162:web:5f1470c89c2356b197616b",
    measurementId: "G-55G024CZRF"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
  