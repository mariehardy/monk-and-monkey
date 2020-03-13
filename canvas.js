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

  gameOver() {
    // frameCounter = 0
    // gameCanvas.clearBoard() 
    gameRunning = false
    console.log('gameRunning is ' + gameRunning)
    this.context.fillStyle = 'blue';
    this.context.font = "30px Arial";
    this.context.fillText("GAME OVER", 200, 200)
  }

  // Reset game to original state
// function reset() {
//   document.getElementById('game-over').style.display = 'none';
//   document.getElementById('game-over-overlay').style.display = 'none';
//   isGameOver = false;
//   gameTime = 0;
//   score = 0;

//   enemies = [];
//   bullets = [];

//   player.pos = [50, canvas.height / 2];
// };

  // pauseGame() {
  //   if (!gameRunning) {
  //   gameCanvas.clearBoard() 
  //   this.context.fillStyle = 'blue';
  //   this.context.fillRect(50, 50, 50, 50);
  //   frameCounter = 0
  //   }
  // }

  draw() {
    
    frameCounter++
    // console.log(frameCounter)
    gameCanvas.clearBoard()

    // BACKGROUND
    // console.log("here")
    // console.log(backgroundImage.totalX)
    // console.log(-(canvas.width * 3))
    backgroundImage.move();

    if (backgroundImage.totalX > -(canvas.width * 0)) {
      backgroundImage.drawLandscape();
    } else if ((backgroundImage.totalX > -(canvas.width * 1))) {
      backgroundImage.drawTransition();
    } 
    else {
      backgroundImage.stopMoving()
      backgroundImage.drawStatue();
    }

    // Update the player sprite animation
    // monk.sprite.update(20);
    // console.log(monk.sprite)


    // DRAW PLAYER
    // monk.update()

    monk.updateAnimatedPlayer()

    // imgPlayer.onload()




    // DRAW OBSTACLES

    // Monkeys fall every 2 second
    if (frameCounter % 120 === 0) {
      let randomPosX = Math.floor(Math.random() * 400)
      monkeyArr.push(new Monkey(randomPosX))
      // monkeyArr.push(new Monkey(randomPosX)) 
    }
    console.log(gameRunning)

    // Check collision
    monkeyArr.forEach((monkey) => {

      // PUT ALL THIS IN a CHECKCOLLISION FUNCTION
      if (monk.crashWith(monkey)) {
        // console.log('monk and monkey have crashed')
        monkey.monkeyWins()
        // console.log(monkey.y)
        gameCanvas.gameOver() //MAKE GAME OVER
        clearTimeout(gameCanvas.draw)
        return
      }
      monkey.update()
    })

    if (gameRunning) {
      window.requestAnimationFrame(gameCanvas.draw)

    }
  }

}