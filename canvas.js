let canvas = document.getElementById('canvas');
let context = document.getElementById('canvas').getContext('2d');

let monkeyArr = [] // array of all obstacles

let frameCounter = 0







// imgPlayer.onload = function () {

//   var totalNumberOfFrames = 10 // ten images in the image (see the url above)
//   var imageFrameNumber = 0 // This is changed to make the sprite animate  
//   var widthOfImage = imgPlayer.width; // find the width of the image
//   var heightOfImage = imgPlayer.height; // find the height of the image
//   var widthOfSingleImage = widthOfImage / totalNumberOfFrames; // The width of each image in the spirite

//   setInterval(function () {
//     context.clearRect(0, 0, 300, 300)

//     imageFrameNumber++; // changes the sprite we look at
//     imageFrameNumber = imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...

//     context.drawImage(imgPlayer,
//       imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
//       widthOfSingleImage, heightOfImage, // width and height
//       30, 30, // x and y - where on the screen
//       widthOfSingleImage, heightOfImage // width and height
//     );
//   }, 100)

//   // console.log(x)

// }










class GameCanvas {
  constructor(width, height) {
    this.canvas = document.getElementById('canvas')
    this.context = document.getElementById('canvas').getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  clearBoard() {
    this.context.clearRect(0, 0, this.width, this.height)
  }

  createBoard() {
    this.clearBoard()
    this.draw()
  }

  nirvana() {
    playAudio(soundsLikeTeenSpirit)
    // this.clearBoard()
    $restartBtn.style.visibility = 'visible';
    $restartBtn.innerText = "REINCARNATE ANYWAYS"
    $messageOverlay.style.visibility = 'visible';
    $messageOverlay.innerText = "CONGRATS! YOU HAVE REACHED NIRVANA."
  }

  gameOver() {
    // frameCounter = 0
    // gameCanvas.clearBoard() 
    // gameRunning = false

    // DISABLE KEY EVENT!!!

    backgroundImage.speed = 0
    playAudio(soundGameOver)
    playAudio(soundPain)
    stopAudio(soundMantra)

    $restartBtn.style.visibility = 'visible';
    $restartBtn.innerText = "REINCARNATE"
    $messageOverlay.style.visibility = 'visible';
    $messageOverlay.innerText = "MAY YOU BE HAPPY."
  }

  // Reset game to original state

  reset() {
    gameRunning = true;
    monk.x = 40;
    monk.y =  363;
    monk.stateLookRight = true;
    monk.stateLookLeft = false;
    monk.stateGiveOffering = false;
    monk.stateFallOver = false;
    backgroundImage.x = 0;
    backgroundImage.totalX = 0;
    backgroundImage.speed = -0.3;
    stopAudio(soundsLikeTeenSpirit)
    stopAudio(soundPain)
    stopAudio(soundGameOver)
    $message.style.visibility = 'hidden';
    console.log(backgroundImage)
  }


  draw() {

    frameCounter++
    // console.log(frameCounter)
    gameCanvas.clearBoard()


    playAudio(soundMantra)
    playAudio(soundForest)

    // BACKGROUND

    backgroundImage.move();

    if (backgroundImage.totalX > -(canvas.width * 0)) {
      backgroundImage.drawLandscape();
    } else {
      backgroundImage.drawTransition();
    }


    // DRAW PLAYER
    monk.update()



    // DRAW OBSTACLES

    // Monkeys fall every 2 second
    if (frameCounter % 120 === 0) {
      playAudio(soundMonkey)
      let randomPosX = Math.floor(Math.random() * 600)
      monkeyArr.push(new Monkey(randomPosX))
    }
    // console.log(gameRunning)

    // Check collision
    monkeyArr.forEach((monkey) => {

      // PUT ALL THIS IN a CHECKCOLLISION FUNCTION
      if (monk.crashWith(monkey)) {
        monk.stateFallOver = true

        gameCanvas.gameOver() //MAKE GAME OVER
        monkey.updateWinningMonkey()

        setTimeout(function () {
          gameRunning = false;
        }, 1000);


        return
      }
      monkey.updateAnimatedMonkey()
    })

    if (monk.x > 434 && monk.stateGiveOffering) {
      gameCanvas.nirvana()
      setTimeout(function () {
        gameRunning = false;
      }, 1000);

    }

    if (gameRunning) {
      window.requestAnimationFrame(gameCanvas.draw)

    }
  }

}