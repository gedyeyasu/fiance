import firebase from "firebase";

const firebaseConfig = {
  apiKey: os.env.get(apikey),
  authDomain: os.env.get(authDomain),
  databaseURL: os.env.get(url),
  projectId: "fiance-2a39b",
  storageBucket: os.env.get(storage),
  messagingSenderId: os.env.get(mId),
  appId: "1:276710390783:web:501fec95231dcd033ac5ca",
  measurementId: "G-VRJK74KYEX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
