"use strict";

var mouseY;
var mouseX;
var score = 0;

function checkWin(){
  // console.log(mouseX * 2, mouseY * 2);
  if ((mouseX * 5 < (200 / 6)) && (mouseY * 5 < (200 / 6))){
    score++;
  } else {
    // score--;
  }

  if (score < 0){
    console.log('Game over!');
  }

  document.getElementById("score").innerText = score;
}

window.addEventListener("mousemove", e => {
  mouseY = (window.innerHeight / 2) - e.y;
  mouseX = (window.innerWidth / 2) - e.x;
});

document.addEventListener("click", () => checkWin);
