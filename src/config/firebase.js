import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA84PTSmP6kg--KB7lV7JlhyVzE10GYW-c",
    authDomain: "eventapp-cd323.firebaseapp.com",
    databaseURL: "https://eventapp-cd323.firebaseio.com",
    projectId: "eventapp-cd323",
    storageBucket: "eventapp-cd323.appspot.com",
    messagingSenderId: "453913193396",
    appId: "1:453913193396:web:e2547451c9a09dac5ee0e1"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase
