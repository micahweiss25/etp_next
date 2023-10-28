import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBSbBtfGZlrpoh5GDAzdgwrQIXsOci0_kY",
    authDomain: "etpnext.firebaseapp.com",
    projectId: "etpnext",
    storageBucket: "etpnext.appspot.com",
    messagingSenderId: "559457224216",
    appId: "1:559457224216:web:abf3a7dff0da451c36e56d"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
