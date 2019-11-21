function Game(x, y, img) {
  this.x = x;
  this.y = y;
  this.imageObj = img;
  this.distance = 2;
  this.direction = 4;

  this.drawImg = function (ctx) {
    ctx.drawImage(this.imageObj, this.x, this.y, 50, 50);
  }

  this.moveDown = function () {
    this.y += this.distance;
  }

  this.moveRight = function () {
    this.x += this.distance;
  }

  this.moveLeft = function () {
    this.x -= this.distance;
  }

  this.moveUp = function () {
    this.y -= this.distance;
  }
}

let myCanvas = document.getElementById("myCanvas");
let myGame = document.getElementById("game");
let ctx = myCanvas.getContext("2d");
let imageObj = new Image();
imageObj.src = myGame.src;
let img1 = new Game(30, 30, imageObj);

window.onload = function () {



  updateGame();
}

document.addEventListener('keyup', move);

const MOVERIGHT = 39.
  MOVEDOWN = 40,
  MOVELEFT = 37,
  MOVEUP = 38;
  MOVESPACE = 32;
  MOVEB = 66;

function move(e) {
  switch (e.keyCode) {
    case MOVERIGHT:
    case 39:
      img1.direction = 3;
      break;
    case MOVEDOWN:
    case 40:
      img1.direction = 4;
      break;
    case MOVELEFT:
    case 37:
      img1.direction = 1;
      break;
    case MOVEUP:
    case 38:
      img1.direction = 2;
      break;
    case MOVESPACE:
    case 32:
      img1.distance = 4;
      break;
      case MOVEB:
    case 66:
      img1.distance = 2;
      break;
  }
}

function updateGame() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  img1.drawImg(ctx);

  if (img1.direction == 3) img1.moveRight();
  if (img1.direction == 4) img1.moveDown();
  if (img1.direction == 1) img1.moveLeft();
  if (img1.direction == 2) img1.moveUp();

  requestAnimationFrame(updateGame, 1000);
}
