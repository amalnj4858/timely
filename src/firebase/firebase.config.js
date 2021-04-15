import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgpKXOnT0vGohknyN-sjLzWV62krIbdwc",
    authDomain: "timely-57359.firebaseapp.com",
    projectId: "timely-57359",
    storageBucket: "timely-57359.appspot.com",
    messagingSenderId: "423253232400",
    appId: "1:423253232400:web:48d8d61eda2737b8893395",
    measurementId: "G-YCP4R2CWPE"
  };

  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();

  const Auth = firebase.auth();

  export default Auth;

  export const signInWithPopUp = ()=> firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{
     return  firebase.auth().signInWithPopup(provider);
  }).catch(error=>console.log(error))
  