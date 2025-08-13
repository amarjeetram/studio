// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxRuiDaa3gENn6-85Naol3kmpayFZ6heQ",
  authDomain: "stare-6545e.firebaseapp.com",
  projectId: "stare-6545e",
  storageBucket: "stare-6545e.firebasestorage.app",
  messagingSenderId: "650083270679",
  appId: "1:650083270679:web:cab7fcd3cedffd247cdc52",
  measurementId: "G-DEZ0GYDPWM"
};


// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
