const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "green";

const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("start-button");
// const restartBtn = document.querySelector("#restart");

function drawRoad() {
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(50, 0, 400, canvas.height);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(60, 0, 10, canvas.height);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(430, 0, 10, canvas.height);
  ctx.closePath();
}

function drawDashedLines() {
  ctx.beginPath();
  ctx.setLineDash([20, 20]);
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 700);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.fill();
}

window.onload = () => {
  drawRoad();
  drawDashedLines()
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
