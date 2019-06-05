import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initalize Firebase
var config = {
   /*ur firebase congiguration*/
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//  firebase.firestore().setting({ timestampsInSnapshots: true });

  export default firebase;
