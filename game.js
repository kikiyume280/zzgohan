// ------------------------------
// 設定
// ------------------------------
let score = 0;
const scoreText = document.getElementById("score");
const videoArea = document.getElementById("videoArea");
const baseVideo = document.getElementById("feedVideo");

// 初期 video は隠す
baseVideo.style.display = "none";

// ------------------------------
// クリックイベント
// ------------------------------
document.body.addEventListener("click", () => {

  // スコア +10
  score += 10;
  scoreText.textContent = "スコア：" + score;

  // 動画を複製
  const v = baseVideo.cloneNode(true);
  v.style.display = "block";

  // ランダムな位置に出す（必要なら固定にできる）
  v.style.position = "absolute";
  v.style.left = "0";
  v.style.top = "0";

  videoArea.appendChild(v);

  // 再生
  v.currentTime = 0;
  v.play();

  // 再生が終わったら削除
  v.onended = () => {
    v.remove();
  };
});
