// Firebase（script タグ版）
import { initializeApp } 
  from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore }
  from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCC7KAv7V4j1Z6-o1Y8ikmb3r5htN9O_aA",
  authDomain: "zzgohan-280.firebaseapp.com",
  projectId: "zzgohan-280",
  storageBucket: "zzgohan-280.firebasestorage.app",
  messagingSenderId: "459336048542",
  appId: "1:459336048542:web:ff6c825dec81cc7df8008f",
  measurementId: "G-JX4RP9LWR3"
};

// Firebase 初期化
export const app = initializeApp(firebaseConfig);

// Firestore 初期化
export const db = getFirestore(app);
