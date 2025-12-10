/*
IMPORTANT: ここに Firebase コンソールで作成した Web アプリの設定を貼ってください。
例：
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT",
storageBucket: "YOUR_PROJECT.appspot.com",
messagingSenderId: "...",
appId: "1:...:web:..."
};
*/


const firebaseConfig = {
// <-- ここに貼る
};


// compat SDK を使って簡単に（上で読み込んでいます）
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();


---
