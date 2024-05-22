// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1yIrOyHcQRvRvdeMNMR2qfilo4nHURhU",
  authDomain: "unifinalproject-4806f.firebaseapp.com",
  projectId: "unifinalproject-4806f",
  storageBucket: "unifinalproject-4806f.appspot.com",
  messagingSenderId: "563917094120",
  appId: "1:563917094120:web:2d1c1fb4f2d6ac241a5d5d",
  measurementId: "G-ZZGY80QYGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db, app };
