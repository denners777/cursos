var firebase = require('firebase');
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCo_coUzLEJGVyM-HiAG7lZX32f9ETzOiM",
    authDomain: "vuejs-firebase-ce24d.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-ce24d.firebaseio.com",
    projectId: "vuejs-firebase-ce24d",
    storageBucket: "vuejs-firebase-ce24d.appspot.com",
    messagingSenderId: "98058674437"
});

module.exports = firebaseApp.database();