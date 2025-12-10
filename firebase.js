// ここに自分の Firebase 設定を書き換えてください
import { initializeApp } 
  from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } 
  from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR.firebaseapp.com",
  projectId: "YOUR",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "YOUR",
  appId: "YOUR"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
