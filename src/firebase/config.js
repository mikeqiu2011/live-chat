import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA9-vXIwCXj-nG7ioC61LOEgYLB_Fymzlo",
    authDomain: "udemy-vue-firebase-sites-a263f.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-a263f",
    storageBucket: "udemy-vue-firebase-sites-a263f.appspot.com",
    messagingSenderId: "419966689121",
    appId: "1:419966689121:web:5f68b6b046245c3787ef20"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp, auth }