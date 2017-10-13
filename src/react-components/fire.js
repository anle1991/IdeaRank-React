import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYNtFQO6DHnLNumEDuNCjqGYBXXjlfY7s",
    authDomain: "idearank-47142.firebaseapp.com",
    databaseURL: "https://idearank-47142.firebaseio.com",
    projectId: "idearank-47142",
    storageBucket: "idearank-47142.appspot.com",
    messagingSenderId: "441163562896"
  };
var fire = firebase.initializeApp(config);
export default fire;
