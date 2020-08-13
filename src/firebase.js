import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA577I6iKqbHT2OhADk9vmjtweiGHYTFz4",
  authDomain: "fiance-2a39b.firebaseapp.com",
  databaseURL: "https://fiance-2a39b.firebaseio.com",
  projectId: "fiance-2a39b",
  storageBucket: "fiance-2a39b.appspot.com",
  messagingSenderId: "276710390783",
  appId: "1:276710390783:web:501fec95231dcd033ac5ca",
  measurementId: "G-VRJK74KYEX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
