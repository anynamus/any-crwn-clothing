import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDX32auDI77UqZ2hg3YDQ63uMjbntNceyc",
    authDomain: "any-crwn-db.firebaseapp.com",
    projectId: "any-crwn-db",
    storageBucket: "any-crwn-db.appspot.com",
    messagingSenderId: "119263794339",
    appId: "1:119263794339:web:8c3755235db7d73c6edb16",
    measurementId: "G-BL9VF5E64X"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
