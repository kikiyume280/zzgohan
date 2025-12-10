// app.js - ゲームロジック
(function(){

// ★ GitHub 動画 URL を使う spawnVideo() を追加（あなたのコードを壊さず追加）
function spawnVideo() {
    const vid = document.createElement("video");
    vid.src = "https://raw.githubusercontent.com/kikiyume280/zzgohan/main/food.mp4";
    vid.autoplay = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.className = "floating-video";

    // ランダム位置同じ
    const jitter = (Math.random() - 0.5) * 120;
    vid.style.left = `calc(50% + ${jitter}px)`;

    playArea.appendChild(vid);

    // 2.5秒後に要素削除
    setTimeout(()=>{
        try{ vid.remove(); }catch(e){}
    }, 2500);
}


// --- ここからあなたの元のコード（修正なし） ---

// スタートは画面タップで開始（ホームから来たとき）
window.addEventListener('load', ()=>{
    startGame();
});

// クリック / タップを受け付ける
playArea.addEventListener('pointerdown', onAreaClick);

// 登録ボタン
registerBtn.addEventListener('click', async ()=>{
    const name = (nameInput.value || '').trim();
    if(!name){ 
        regMsg.textContent = '名前を入力してください'; 
        return; 
    }

    regMsg.textContent = '登録中…';

    try{
        const now = Date.now();
        await db.collection('scores').add({ name, score: Number(score), timestamp: now });

        const q = await db.collection('scores')
            .where('name','==',name)
            .where('score','==',Number(score))
            .orderBy('timestamp','desc')
            .get();

        if(!q.empty){
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

})(); // ★ IIFE を正しく閉じる
