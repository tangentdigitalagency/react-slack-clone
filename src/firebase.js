import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDECLZQonLmJZqPl03mkP6DibpwpREgrHw",
    authDomain: "slackclone-ced8e.firebaseapp.com",
    projectId: "slackclone-ced8e",
    storageBucket: "slackclone-ced8e.appspot.com",
    messagingSenderId: "638737422962",
    appId: "1:638737422962:web:2baf351e4880dd5a3900eb"
}

firebase.initializeApp(firebaseConfig);

export default firebase;