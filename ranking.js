// ranking.js - 上位表示ロジック
(async ()=>{
const rankList = document.getElementById('rankList');
try{
// 上位10件を score 降順、timestamp 昇順で取得
const q = await db.collection('scores')
.orderBy('score','desc')
.orderBy('timestamp','asc')
.limit(10)
.get();


if(q.empty){
rankList.innerHTML = '<p class="note">まだスコアがありません。</p>';
return;
}


const container = document.createElement('div');
let pos = 1;
q.forEach(doc =>{
const data = doc.data();
const item = document.createElement('div');
item.className = 'rank-item';
item.innerHTML = `<div><span class="pos">${pos}.</span><strong>${escapeHtml(data.name)}</strong></div><div>${Number(data.score)}</div>`;
container.appendChild(item);
pos++;
});
rankList.innerHTML = '';
rankList.appendChild(container);
}catch(err){
console.error(err);
rankList.innerHTML = '<p class="note">読み込みに失敗しました。コンソールを確認してください。</p>';
}


function escapeHtml(s){
return (s||'').toString().replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;' }[c]));
}
})();



