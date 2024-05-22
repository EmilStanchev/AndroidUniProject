const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

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
module.exports = { db, app };
