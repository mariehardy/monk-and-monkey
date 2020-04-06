// ----------------------------
// ---------BACKGROUND---------
// ----------------------------


let imgBackground = new Image();
imgBackground.src = './img/monandmonkey_bg_ground.jpg';
let imgBackground2 = new Image();
imgBackground2.src = './img/monandmonkey_bg_keanu2.jpg';


let backgroundImage = {
  x: 0,
  totalX: 0,
  speed: -0.3,

  move: function () {
    this.totalX += this.speed;
    this.x += this.speed;
    this.x %= canvas.width;
  },

  drawLandscape: function () {
    context.drawImage(imgBackground, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(imgBackground, this.x + canvas.width, 0);
    } else {
      context.drawImage(imgBackground, this.x - imgBackground.width, 0);
    }
  },

  drawTransition: function () {
    context.drawImage(imgBackground, this.x, 0);
    if (this.x > -780) {
      context.drawImage(imgBackground2, this.x + canvas.width, 0);
    } else {
      context.drawImage(imgBackground2, this.x + canvas.width, 0);
      context.drawImage(imgBackground2, this.x - imgBackground2.width, 0);
      this.speed = 0
      $message.style.display = 'inherit';
      $message.innerText = "BOW DOWN TO VENERABLE BUDDHA KEANU REEVES. COME CLOSER & PRESS ARROW DOWN."
    }
  }

}







// ----------------------------
// -----------PLAYER-----------
// ----------------------------


let arrImgSrc1 = ["./img/monksprite-cutter/tile000.png", "./img/monksprite-cutter/tile001.png", "./img/monksprite-cutter/tile002.png"];
let arrImgSrc2 = ["./img/monksprite-cutter/tile003.png", "./img/monksprite-cutter/tile004.png", "./img/monksprite-cutter/tile005.png"];
let arrImgSrc3 = ["./img/monksprite-cutter/tile006.png", "./img/monksprite-cutter/tile007.png", "./img/monksprite-cutter/tile008.png"];
let arrImgSrc4 = ["./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile010.png", "./img/monksprite-cutter/tile011.png"];

let arrImg1 = arrImgSrc1.map((src) => {
  let img = new Image();
  img.src = src;
  return img
})
let arrImg2 = arrImgSrc2.map((src) => {
  let img = new Image();
  img.src = src;
  return img
})
let arrImg3 = arrImgSrc3.map((src) => {
  let img = new Image();
  img.src = src;
  return img
})
let arrImg4 = arrImgSrc4.map((src) => {
  let img = new Image();
  img.src = src;
  return img
})

let indexMonk = 0;




let monk = {

  x: 40,
  y: 363,
  width: 50,
  height: 50,
  stateLookRight: true,
  stateLookLeft: false,
  stateGiveOffering: false,
  stateFallOver: false,
  speedX: 0,
  speedY: 0,
  top: function () {
    return this.y
  },
  left: function () {
    return this.x
  },
  bottom: function () {
    return this.y + this.height
  },
  right: function () {
    return this.x + this.width
  },
  crashWith: function (monkey) {
    return !(
      this.bottom() < monkey.top() ||
      this.top() > monkey.bottom() ||
      this.right() < monkey.left() ||
      this.left() > monkey.right()
    );
  },
  moveLeft: function () {
    if (this.x > 20) {
      this.stateLookLeft = true
      this.stateLookRight = false;
      this.stateGiveOffering = false;
      indexMonk++;
      this.x -= 2;
    }
  },
  moveRight: function () {
    if (this.x < (canvas.width - 50)) {
      this.stateLookRight = true
      this.stateLookLeft = false
      this.stateGiveOffering = false;
      indexMonk++;
      this.x += 4;
    }
  },
  moveUp: function () {
    if (this.stateGiveOffering) {
      this.stateLookRight = true
      this.stateGiveOffering = false
    } 
  },
  giveOffering: function () {
    this.stateGiveOffering = true;
    this.stateLookRight = false
    this.stateLookLeft = false
  },
  update: function () {

    if (this.stateLookLeft) {
      context.drawImage(arrImg2[indexMonk % arrImg2.length], this.x, this.y, this.width, this.height);
    }

    if (this.stateLookRight) {
      context.drawImage(arrImg1[indexMonk % arrImg1.length], this.x, this.y, this.width, this.height);
    }

    if (this.stateGiveOffering) {

      if (indexMonk > 2) {
        indexMonk = 0;
      }
      if (frameCounter % 10 === 0 && indexMonk < 2) {
        indexMonk++;
      }
      context.drawImage(arrImg3[indexMonk], this.x, this.y, this.width, this.height);
    }

    if (this.stateFallOver) {
      this.stateGiveOffering = false;
      this.stateLookRight = false
      this.stateLookLeft = false

      if (indexMonk > 5) {
        indexMonk = 0;
      }
      if (frameCounter % 10 === 0 && indexMonk < 5) {
        indexMonk++;
      }
      context.drawImage(arrImg4[indexMonk % arrImg4.length], this.x, this.y, this.width, this.height);
    }
  }

}




// ----------------------------
// ---------OBSTACLES----------
// ----------------------------


let imgMonkey = new Image();
imgMonkey.src = "./img/monkey_sprite4.png";

let imgWinningMonkey = new Image();
imgWinningMonkey.src = "./img/monkeywins_sprite.png";

class Monkey {
  constructor(x) {
    this.x = x;
    this.y = -350;
    this.width = 80;
    this.height = imgMonkey.height - 20;
    this.speedX = 0;
    this.speedY = 0;
    this.velocityX = 9;
    this.velocityY = 7;
    this.imageFrameNumber = 0;
  }

  top() {
    return this.y
  }
  left() {
    return this.x + 30
  }
  bottom() {
    return this.y + this.height
  }
  right() {
    return this.x + this.width
  }

  updateAnimatedMonkey() {
    this.y += this.velocityY;
    if (this.y + this.velocityY > canvas.height - 500) {
      this.velocityY *= -1;
    }

    var totalNumberOfFrames = 3 // three images in the image 
    var widthOfImage = imgMonkey.width; // find the width of the image
    var heightOfImage = imgMonkey.height; // find the height of the image
    var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the sprite

    this.imageFrameNumber++; // changes the sprite we look at
    this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... up to 3 and back to 0 again, then 1...

    context.drawImage(imgMonkey,
      this.imageFrameNumber * widthOfSingleImage, 0,
      widthOfSingleImage, heightOfImage, // width and height
      this.x, this.y, // x and y - where on the screen
      widthOfSingleImage, heightOfImage // width and height
    );
  }

  updateWinningMonkey() {
    this.y += this.velocityY;
    if (this.y + this.velocityY > canvas.height - 500) {
      this.velocityY *= -1;
    }

    var totalNumberOfFrames = 3 // three images in the image (see the url above)
    var widthOfImage = imgWinningMonkey.width; // find the width of the image
    var heightOfImage = imgWinningMonkey.height; // find the height of the image
    var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the sprite

    this.imageFrameNumber++; // changes the sprite we look at
    this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto X and back to 0 again, then 1...

    context.drawImage(imgWinningMonkey,
      this.imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
      widthOfSingleImage, heightOfImage, // width and height
      this.x, this.y, // x and y - where on the screen
      widthOfSingleImage, heightOfImage // width and height
    );
  }

}




// ----------------------------
// -----------AUDIO------------
// ----------------------------


let soundMonkey = new Audio("./sound/SQMonkey.mp3");
let soundMantra = new Audio("./sound/falsalama__om-gate-gate-paragate-parasamgate-bodhi-soha.wav");
let soundForest = new Audio("./sound/skipjack2001__rainforest.mp3");
let soundGameOver = new Audio("./sound/spidermonkey.mp3");
let soundsLikeTeenSpirit = new Audio("./sound/SmellsLikeTeenSpirit.mp3");
let soundPain = new Audio("./sound/pain.mp3");


function playAudio(sound) {
  sound.play();
}

function pauseAudio(sound) {
  sound.pause();
}