import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADhUJzwxisBN3mQJNRZL8OeeR-iRprDF0",
    authDomain: "firechat-4fd5e.firebaseapp.com",
    projectId: "firechat-4fd5e",
    storageBucket: "firechat-4fd5e.appspot.com",
    messagingSenderId: "395823808860",
    appId: "1:395823808860:web:2b29ec651046b0cd668199",
    measurementId: "G-R2VVQFK9HK"
})
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {auth, db}