import firebase from "firebase";

const firebaseApp  =firebase.initializeApp({
    apiKey: "AIzaSyAlVrwwa62McQ7d7nBDIYwNhTZitIzcrU4",
  authDomain: "clone-e4fae.firebaseapp.com",
  projectId: "clone-e4fae",
  storageBucket: "clone-e4fae.appspot.com",
  messagingSenderId: "811187609458",
  appId: "1:811187609458:web:64c1cb7e2b6642d5f387eb",
  measurementId: "G-9Q07HH2KE3",

});

const db =firebaseApp.firestore();
const auth =firebase.auth();

export {db ,auth};