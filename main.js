let gameRunning = true

let gravity = 0.2




let img1 = new Image();
img1.src = './img/monandmonkey_bg_ground.jpg';
let img2 = new Image();
img2.src = './img/monandmonkey_bg_keanu2.jpg';
let img3 = new Image();
img3.src = './img/monandmonkey_bg_KEANU_nirvana.jpg';



let backgroundImage = {
  x: 0,
  totalX: 0,
  speed: -0.3,

  move: function () {
    this.totalX += this.speed;
    this.x += this.speed;
    this.x %= canvas.width;
  },

  drawLandscapeNirvana: function () {
    context.drawImage(img3, this.x, 0);

  },

  drawLandscape: function () {

    context.drawImage(img1, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(img1, this.x + canvas.width, 0);
    } else {
      context.drawImage(img1, this.x - img1.width, 0);
    }
  },

  drawTransition: function () {
    context.drawImage(img1, this.x, 0);
    // console.log(this.x)
    if (this.x > -780) {
      context.drawImage(img2, this.x + canvas.width, 0);
    } else {
      context.drawImage(img2, this.x + canvas.width, 0);
      context.drawImage(img2, this.x - img2.width, 0);
      this.speed = 0


      $message.style.visibility = 'visible';
      $message.innerText = "BOW DOWN TO THE BUDDHA KEANU REEVES. COME CLOSER & PRESS ARROW DOWN."

      // myVar = setTimeout(function(){ 

    //   context.fillStyle = 'red';
    //   context.font = "28px courier";

    //   var txt = 'BOW DOWN TO THE BUDDHA KEANU REEVES\n  (COME CLOSER & PRESS ARROW DOWN)';
    //   var x = 88;
    //   var y = 62;
    //   var lineheight = 35;
    //   var lines = txt.split('\n');

    //   for (var i = 0; i < lines.length; i++) {
    //     context.fillText(lines[i], x, y + (i * lineheight));
    //   }


    //   context.fillStyle = 'turquoise';
    //   context.font = "28px courier";

    //   var txt = 'BOW DOWN TO THE BUDDHA KEANU REEVES\n  (COME CLOSER & PRESS ARROW DOWN)';
    //   var x = 92;
    //   var y = 62;
    //   var lineheight = 35;
    //   var lines = txt.split('\n');

    //   for (var i = 0; i < lines.length; i++) {
    //     context.fillText(lines[i], x, y + (i * lineheight));
    //   }

    //   return
    }
  }

}







// SPRITE ON KEYPRESS -- SEE REPL.IT
let arrImg1 = ["./img/monksprite-cutter/tile000.png", "./img/monksprite-cutter/tile001.png", "./img/monksprite-cutter/tile002.png"];
let arrImg2 = ["./img/monksprite-cutter/tile003.png", "./img/monksprite-cutter/tile004.png", "./img/monksprite-cutter/tile005.png"];
let arrImg3 = ["./img/monksprite-cutter/tile006.png", "./img/monksprite-cutter/tile007.png", "./img/monksprite-cutter/tile008.png"];
let arrImg4 = ["./img/monksprite-cutter/tile009.png", "./img/monksprite-cutter/tile010.png", "./img/monksprite-cutter/tile011.png"];


let indexMonkAlfonsoSprite = 0;
let monkAlfonsoSprite = new Image();

// PLAYER

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
  // karmaPoint: 60,
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

    // if (this.x > 434) {
    //   gameCanvas.nirvana()
    //   console.log('inside the statue area ' + this.x)
    //   return
    //   // this.gainKarmaPoints(100)
    // } else {
    //   // context.fillStyle = 'white';
    //   // context.font = "30px courier";

    //   context.fillText("COME CLOSER MY CHILD!", 300, 300);
    //   console.log('outside the statue area ' + this.x)
    // }
  },

  // gainKarmaPoints: function (num) {
  //   this.karmaPoint += num
  // },

  update: function () { // static player image

    if (this.stateLookLeft) {
      // console.log("not stateLookRight " + this.stateLookRight)
      monkAlfonsoSprite.src = arrImg2[indexMonkAlfonsoSprite % arrImg2.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
    }

    if (this.stateLookRight) {
      monkAlfonsoSprite.src = arrImg1[indexMonkAlfonsoSprite % arrImg1.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
      // console.log("stateLookRight " + this.stateLookRight)
    }

    if (this.stateGiveOffering) {
      // console.log(indexMonkAlfonsoSprite)

      if (frameCounter % 10 === 0 && indexMonkAlfonsoSprite < 2) {
        indexMonkAlfonsoSprite++;
      }

      monkAlfonsoSprite.src = arrImg3[indexMonkAlfonsoSprite];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
      // console.log("stateGiveOffering " + this.stateGiveOffering)
    }

    if (this.stateFallOver) {
      this.stateGiveOffering = false;
      this.stateLookRight = false
      this.stateLookLeft = false
      indexMonkAlfonsoSprite = 0
      for (let i = 0; i < 2; i++) {
        indexMonkAlfonsoSprite++;
      }
      monkAlfonsoSprite.src = arrImg4[indexMonkAlfonsoSprite % arrImg4.length];
      context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
      // console.log("stateFallOver " + this.stateFallOver)

      // if (frameCounter % 10 === 0 && indexMonkAlfonsoSprite < 2) {
      //   indexMonkAlfonsoSprite++;
      // }
      // monkAlfonsoSprite.src = arrImg5[indexMonkAlfonsoSprite % arrImg5.length];
      // context.drawImage(monkAlfonsoSprite, this.x, this.y, this.width, this.height);
      // console.log("monk on back ")
    }

  },

  // imageFrameNumber: 0,

  // updateStillPlayer: function () {
  //   // imgPlayer.onload = function () {
  //   let numberOfRows = 3;
  //   var totalNumberOfFrames = 3;
  //   var widthOfImage = imgPlayer.width; // find the width of the image
  //   var heightOfImage = imgPlayer.height / numberOfRows; // find the height of the image
  //   var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

  //   // setInterval(function () {
  //   //   context.clearRect(0, 0, 300, 300)

  //   // this.imageFrameNumber++; // changes the sprite we look at
  //   // this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

  //     context.drawImage(imgPlayer,
  //       0, 0, // x and y - where in the sprite
  //       widthOfSingleImage, heightOfImage, // width and height
  //       this.x, this.y, // x and y - where on the screen
  //       widthOfSingleImage, heightOfImage // width and height
  //     );
  //   // }, 100)

  //   // }
  // },

  // updateAnimatedPlayer: function () {
  //   // imgPlayer.onload = function () {
  //   let numberOfRows = 3;
  //   var totalNumberOfFrames = 3;
  //   var widthOfImage = imgPlayer.width; // find the width of the image
  //   var heightOfImage = imgPlayer.height / numberOfRows; // find the height of the image
  //   var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

  //   // setInterval(function () {
  //   //   context.clearRect(0, 0, 300, 300)

  //   // imageFrameNumber++; // changes the sprite we look at
  //   // console.log('imageFrameNumber ' + this.imageFrameNumber)
  //   this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

  //     context.drawImage(imgPlayer,
  //       this.imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
  //       widthOfSingleImage, heightOfImage, // width and height
  //       this.x, this.y, // x and y - where on the screen
  //       widthOfSingleImage, heightOfImage // width and height
  //     );
  //   // }, 100)

  //   // }
  // }

}



// OBSTACLES

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

    // let imageFrameNumber = 0;
    var totalNumberOfFrames = 3 // ten images in the image (see the url above)
    var widthOfImage = imgMonkey.width; // find the width of the image
    var heightOfImage = imgMonkey.height; // find the height of the image
    var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

    // setInterval(function () {
    //   context.clearRect(0, 0, 300, 300)

    // this.imageFrameNumber++; // changes the sprite we look at
    this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

    context.drawImage(imgMonkey,
      this.imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
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

    // this.imageFrameNumber++; // changes the sprite we look at
    this.imageFrameNumber = this.imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

    context.drawImage(imgWinningMonkey,
      this.imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
      widthOfSingleImage, heightOfImage, // width and height
      this.x, this.y, // x and y - where on the screen
      widthOfSingleImage, heightOfImage // width and height
    );


  }



  // update() {
  //   let img = new Image();
  //   // img.onload = function () {
  //   img.src = "./img/monkey_sprite1.png";
  //   context.drawImage(img, this.x, this.y, this.width, this.height);

  //   // this.velocityY += gravity;
  //   this.y += this.velocityY;
  //   if (this.y + this.velocityY > canvas.height - 60 || this.y + this.velocityY < 0) {
  //     this.velocityY *= -1;
  //   }
  //   if (this.y === 0 || this.velocityY === -1) {
  //     this.y = -100;
  //   }
  //   // if (this.x + this.velocityX > canvas.width || this.x + this.velocityX < 0) {
  //   //   this.velocityX *= -1;
  //   // }
  // }

  // monkeyWins() {
  //   // laughing monkey sound
  //   // offering appears in  monkeys hands
  //   // monkey goes back up with offering

  //   let img = new Image();
  //   img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
  //   context.drawImage(img, this.x, this.y, this.width, this.height);
  //   context.fillStyle = 'blue';
  //   context.fillRect(this.x + 5, this.y + 5, 10, 10);
  //   this.y = -100
  // }

}


//AUDIO


let soundMonkey = new Audio("./sound/SQMonkey.mp3");
let soundMantra = new Audio("./sound/falsalama__om-gate-gate-paragate-parasamgate-bodhi-soha.wav");
let soundForest = new Audio("./sound/skipjack2001__rainforest.mp3");
let soundGameOver = new Audio("./sound/spidermonkey.mp3");
let soundsLikeTeenSpirit = new Audio("./sound/SmellsLikeTeenSpirit.mp3");
let soundPain = new Audio("./sound/pain.mp3");


function playAudio(sound) {
  sound.play();
}

function stopAudio(sound) {
  sound.pause();
}