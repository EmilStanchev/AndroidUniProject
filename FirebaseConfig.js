// db importing for not seed
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// import for when I seed data to firebase:
/*const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getReactNativePersistence, initializeAuth } = require("firebase/auth");
const ReactNativeAsyncStorage = require("@react-native-async-storage/async-storage");
*/
const firebaseConfig = {
  apiKey: "AIzaSyC1yIrOyHcQRvRvdeMNMR2qfilo4nHURhU",
  authDomain: "unifinalproject-4806f.firebaseapp.com",
  projectId: "unifinalproject-4806f",
  storageBucket: "unifinalproject-4806f.appspot.com",
  messagingSenderId: "563917094120",
  appId: "1:563917094120:web:2d1c1fb4f2d6ac241a5d5d",
  measurementId: "G-ZZGY80QYGM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
module.exports = { db, app, auth };
