import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAcoWq9ZbBcO8s9zUXIdyhrv8t1gPj5gM",
    authDomain: "tinder-clone-60a38.firebaseapp.com",
    databaseURL: "https://tinder-clone-60a38.firebaseio.com",
    projectId: "tinder-clone-60a38",
    storageBucket: "tinder-clone-60a38.appspot.com",
    messagingSenderId: "919810188001",
    appId: "1:919810188001:web:05a4538fc334592a284da0",
    measurementId: "G-Y012B8MLE8"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;