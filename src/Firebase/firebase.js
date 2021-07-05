import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBdpinfgHDW7FgjRHDa-SPFGXUvyzyzFHU",
  authDomain: "shoes-garcia.firebaseapp.com",
  projectId: "shoes-garcia",
  storageBucket: "shoes-garcia.appspot.com",
  messagingSenderId: "473793031347",
  appId: "1:473793031347:web:f77bdb2b9977a9268a14c6"
};

const fb =  firebase.initializeApp(firebaseConfig);


export const getStorageRef = () => {
  var storage = fb.storage();

  return storage.ref('shoes-garcia');
}


export const dataBase = fb.firestore();

