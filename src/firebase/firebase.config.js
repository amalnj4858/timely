import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {                                //config provided by firebase
    apiKey: "AIzaSyBgpKXOnT0vGohknyN-sjLzWV62krIbdwc",
    authDomain: "timely-57359.firebaseapp.com",
    projectId: "timely-57359",
    storageBucket: "timely-57359.appspot.com",
    messagingSenderId: "423253232400",
    appId: "1:423253232400:web:48d8d61eda2737b8893395",
    measurementId: "G-YCP4R2CWPE"
  };

  
   firebase.initializeApp(firebaseConfig);
  

  var provider = new firebase.auth.GoogleAuthProvider();  //provider for google authentication

  export default firebase;

  export const signInWithPopUp = ()=> firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{  //configuring to not persist the user locally in the browser.
     return  firebase.auth().signInWithPopup(provider);
  }).catch(error=>alert(error.message))
  