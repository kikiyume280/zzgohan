// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC7KAv7V4j1Z6-o1Y8ikmb3r5htN9O_aA",
  authDomain: "zzgohan-280.firebaseapp.com",
  projectId: "zzgohan-280",
  storageBucket: "zzgohan-280.firebasestorage.app",
  messagingSenderId: "459336048542",
  appId: "1:459336048542:web:ff6c825dec81cc7df8008f",
  measurementId: "G-JX4RP9LWR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
