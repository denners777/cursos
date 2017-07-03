import Firebase from 'firebase';

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyCo_coUzLEJGVyM-HiAG7lZX32f9ETzOiM",
    authDomain: "vuejs-firebase-ce24d.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-ce24d.firebaseio.com",
    projectId: "vuejs-firebase-ce24d",
    storageBucket: "vuejs-firebase-ce24d.appspot.com",
    messagingSenderId: "98058674437"
});

export default firebaseApp.database();