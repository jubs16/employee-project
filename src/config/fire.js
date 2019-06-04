import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initalize Firebase
var config = {
    apiKey: "AIzaSyATh6v4zNO34EVOiZbe-yPBjtVJCXeR3qA",
    authDomain: "game-schedule-a6903.firebaseapp.com",
    databaseURL: "https://game-schedule-a6903.firebaseio.com",
    projectId: "game-schedule-a6903",
    storageBucket: "game-schedule-a6903.appspot.com",
    messagingSenderId: "843024978883",
    appId: "1:843024978883:web:e11fdededd9213c7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//  firebase.firestore().setting({ timestampsInSnapshots: true });

  export default firebase;