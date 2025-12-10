// app.js - ゲームロジック


// 2.5秒後に要素削除（動画より少し余裕）
setTimeout(()=>{
try{ vid.remove(); }catch(e){}
}, 2500);
}


// スタートは画面タップで開始（ホームから来たとき）
// index.html の「スタート」リンクから来る想定なので、ページ読み込み時に自動開始
window.addEventListener('load', ()=>{
startGame();
});


// クリック / タップを受け付ける
playArea.addEventListener('pointerdown', onAreaClick);


// 登録ボタン
registerBtn.addEventListener('click', async ()=>{
const name = (nameInput.value || '').trim();
if(!name){ regMsg.textContent = '名前を入力してください'; return; }


regMsg.textContent = '登録中…';
try{
// ドキュメントを追加
const now = Date.now();
await db.collection('scores').add({ name, score: Number(score), timestamp: now });


// 同じ名前かつ同じスコアのものを複数残さない。最新の1つだけを残す。
const q = await db.collection('scores')
.where('name','==',name)
.where('score','==',Number(score))
.orderBy('timestamp','desc')
.get();


if(!q.empty){
// 最初の1件を残して、それ以外を削除
let keepId = q.docs[0].id;
const batch = db.batch();
for(let i=1;i<q.docs.length;i++){
batch.delete(q.docs[i].ref);
}
await batch.commit();
}


regMsg.textContent = '登録しました！ホームへ戻ります';
setTimeout(()=>{ location.href = 'index.html'; }, 800);
}catch(err){
console.error(err);
regMsg.textContent = 'エラーが発生しました。コンソールを確認してください。';
}
});


backBtn.addEventListener('click', ()=>{ location.href = 'index.html'; });
homeBtn.addEventListener('click', ()=>{ location.href = 'index.html'; });


})();
