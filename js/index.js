const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "green";

const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("start-button");
// const restartBtn = document.querySelector("#restart");

const roadX = 50;
const roadWidth = 400;

const car = new Image();
car.src = "../images/car.png"
let carX = 300;
let carY = 600;
let carWidth = 100;
let carHeight = 150;
let carSpeed = 5;

let isCarGoingLeft = false;
let isCarGoingRight = false;

let gameOver = false;

function drawRoad() {
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(roadX, 0, roadWidth, canvas.height);
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
  ctx.beginPath();
}

function drawCar() {
  ctx.drawImage(car, carX, carY, carWidth, carHeight);
  if (isCarGoingRight) {
    if (carX < roadX + roadWidth - carWidth) {
      carX += carSpeed;
    }
  } else if (isCarGoingLeft) {
      if (carX > roadX) {
        carX -= carSpeed;
      }
  }
}

let animationFrameId;


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawDashedLines()
  drawCar()
  
  animationFrameId = requestAnimationFrame(animate);
}

function startGame() {
  animate()
}

window.onload = () => {

  drawRoad();
  drawDashedLines()
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", event => {
    if (event.code === "ArrowRight") {
      isCarGoingRight = true;
    }
    if (event.code === "ArrowLeft") {
      isCarGoingLeft = true;
    }
  });
  
  document.addEventListener("keyup", event => {
    isCarGoingRight = false;
    isCarGoingLeft = false;
  });
};
