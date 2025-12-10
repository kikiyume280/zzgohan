/*
IMPORTANT: ここに Firebase コンソールで作成した Web アプリの設定を貼ってください。
*/

const firebaseConfig = {
  apiKey: "AIzaSyCC7KAv7V4j1Z6-o1Y8ikmb3r5htN9O_aA",
  authDomain: "zzgohan-280.firebaseapp.com",
  projectId: "zzgohan-280",
  storageBucket: "zzgohan-280.firebasestorage.app",
  messagingSenderId: "459336048542",
  appId: "1:459336048542:web:ff6c825dec81cc7df8008f",
  measurementId: "G-JX4RP9LWR3"
};

// compat SDK を使って簡単に（上で読み込んでいます）
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

