import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const configFirebase = {
  // apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  // authDomain: process.env["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  // projectId: process.env["REACT_APP_FIREBASE_PROJECT_ID"],
  // storageBucket: process.env["REACT_APP_FIREBASE_STORAGE_BUCKET"],
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAdd5k6kr-f-dQjFz-_izmyK-2l2oaXh0w",
  authDomain: "dataparkir-5aa5f.firebaseapp.com",
  databaseURL: "https://dataparkir-5aa5f-default-rtdb.firebaseio.com",
  projectId: "dataparkir-5aa5f",
  storageBucket: "dataparkir-5aa5f.appspot.com",
  messagingSenderId: "152623388809",
  appId: "1:152623388809:web:24c5885568eb4060934e58",
};

class Firebase {
  constructor() {
    app.initializeApp(configFirebase);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  createFirebaseUser = (obj) =>
    this.auth.createUserWithEmailAndPassword(obj.email, obj.password);

  loginFirebaseUser = (obj) =>
    this.auth.signInWithEmailAndPassword(obj.email, obj.password);

  checkFirebaseSession = (cb) => this.auth.onAuthStateChanged(cb);

  saveFirestoreVehicle = (obj) => this.db.collection("vehicles").add(obj);

  getAllFirestoreVehicle = () => this.db.collection("vehicles").get();

  getUpdateFirestoreVehicle = (cb) =>
    this.db.collection("vehicles").onSnapshot(cb);

  resetPasword = (email) => this.auth.sendPasswordResetEmail(email);

  // getUpdateFirestoreVehicle = ()
}

export default Firebase;
