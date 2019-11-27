class Game {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.imageObj = img;
    this.distance = 2;
    this.direction = 0;
  };
  drawImg(ctx) {
    ctx.drawImage(this.imageObj, this.x, this.y, 50, 50);
  }

  moveDown() {
    this.y += this.distance;
  }

  moveRight() {
    this.x += this.distance;
  }

  moveLeft() {
    this.x -= this.distance;
  }

  moveUp() {
    this.y -= this.distance;
  }
}

let myCanvas = document.getElementById("myCanvas");
let myGame = document.getElementById("game");
let ctx = myCanvas.getContext("2d");
let imageObj = new Image();
imageObj.src = myGame.src;
let img = new Game(500, 550, imageObj);

window.onload = function () {
  updateGame();
}

document.addEventListener('keyup', move);

const MOVERIGHT = 39;
MOVEDOWN = 40;
MOVELEFT = 37;
MOVEUP = 38;
MOVESPACE = 32;
MOVEB = 66;
MOVEV = 86;
MOVEN = 78;

function move(e) {
  switch (e.keyCode) {
    case MOVERIGHT:
    case 39:
      img.direction = 3;
      break;
    case MOVEDOWN:
    case 40:
      img.direction = 4;
      break;
    case MOVELEFT:
    case 37:
      img.direction = 1;
      break;
    case MOVEUP:
    case 38:
      img.direction = 2;
      break;
    case MOVESPACE:
    case 32:
      img.distance = 4;
      break;
    case MOVEB:
    case 66:
      img.distance = 2;
      break;
    case 86:
      img.distance = 0;
      break;
    case 78:
      img.distance = 1;
      break;
  }
}

function updateGame() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  img.drawImg(ctx);

  if (img.direction == 3) img.moveRight();
  if (img.direction == 4) img.moveDown();
  if (img.direction == 1) img.moveLeft();
  if (img.direction == 2) img.moveUp();

  requestAnimationFrame(updateGame, 1000);
}
