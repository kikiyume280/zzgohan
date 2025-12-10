let score=0;
const video=document.getElementById("feedVideo");
const scoreText=document.getElementById("score");
let canClick=true;

document.body.addEventListener("click",()=>{
  if(!canClick)return;
  score+=10;
  scoreText.textContent="スコア："+score;
  video.currentTime=0;
  video.style.display="block";
  video.play();
  video.onended=()=>video.style.display="none";
});

setTimeout(()=>{
  canClick=false;
  localStorage.setItem("finalScore",score);
  location.href="result.html";
},30000);
