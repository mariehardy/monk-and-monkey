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


let arrImg1 = ["./img/monksprite-cutter/tile000.png", "./img/monksprite-cutter/tile001.png", "./img/monksprite-cutter/tile002.png"];
let arrImg2 = ["./img/monksprite-cutter/tile003.png", "./img/monksprite-cutter/tile004.png", "./img/monksprite-cutter/tile005.png"];
let arrImg3 = ["./img/monksprite-cutter/tile006.png", "./img/monksprite-cutter/tile007.png", "./img/monksprite-cutter/tile008.png"];
let arrImg4 = ["./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile010.png", "./img/monksprite-cutter/tile011.png"];

let indexMonkAlfonsoSprite = 0;
let monkAlfonsoSprite = new Image();


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
      indexMonkAlfonsoSprite++;
      this.x -= 2;
    }

  },
  moveRight: function () {
    if (this.x < (canvas.width - 50)) {
      this.stateLookRight = true
      this.stateLookLeft = false
      this.stateGiveOffering = false;
      indexMonkAlfonsoSprite++;
      this.x += 4;
    }
  },

  // duck: function () {
  //   if (this.height = 50) {
  //     this.height = 25;
  //     this.y += 10;
  //   }
  // },

  // duckUp: function () {
  //   // if (this.height = this.height / 2) {
  //   this.height = 50
  //   this.y -= this.height / 2;
  //   // }
  // },

  giveOffering: function () {
    this.stateGiveOffering = true;
    this.stateLookRight = false
    this.stateLookLeft = false
  },

  update: function () {

    if (this.stateLookLeft) {
      monkAlfonsoSprite.src = arrImg2[indexMonkAlfonsoSprite % arrImg2.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
    }

    if (this.stateLookRight) {
      monkAlfonsoSprite.src = arrImg1[indexMonkAlfonsoSprite % arrImg1.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
    }

    if (this.stateGiveOffering) {
      if (frameCounter % 10 === 0 && indexMonkAlfonsoSprite < 2) {
        indexMonkAlfonsoSprite++;
      }
      monkAlfonsoSprite.src = arrImg3[indexMonkAlfonsoSprite];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
    }

    if (this.stateFallOver) {
      this.stateGiveOffering = false;
      this.stateLookRight = false
      this.stateLookLeft = false
      indexMonkAlfonsoSprite = 0
      for (let i = 0; i < 5; i++) {
        indexMonkAlfonsoSprite++;
      }
      monkAlfonsoSprite.src = arrImg4[indexMonkAlfonsoSprite % arrImg4.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
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

    // let imageFrameNumber = 0;
    var totalNumberOfFrames = 3 // ten images in the image (see the url above)
    var widthOfImage = imgWinningMonkey.width; // find the width of the image
    var heightOfImage = imgWinningMonkey.height; // find the height of the image
    var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

    // setInterval(function () {
    //   context.clearRect(0, 0, 300, 300)

    this.imageFrameNumber++; // changes the sprite we look at
    this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

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