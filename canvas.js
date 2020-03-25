let canvas = document.getElementById('canvas');
let context = document.getElementById('canvas').getContext('2d');

let monkeyArr = [] // array of all obstacles

let frameCounter = 0

let gameRunning = true

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      window.oRequestAnimationFrame      ||
      window.msRequestAnimationFrame     ||
      function(callback){
          window.setTimeout(callback, 1000 / 60);
      };
})();








resources.load([
  'img/sprites.png',
  'img/terrain.png'
]);
resources.onReady(init);









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

  // When player has won:

  nirvana() {
    playAudio(soundsLikeTeenSpirit)
    $restartBtn.style.display = 'inherit';
    $restartBtn.innerText = "REINCARNATE ANYWAYS"
    $messageOverlay.style.display = 'inherit';
    $messageOverlay.innerText = "CONGRATS! YOU HAVE REACHED NIRVANA."
  }

  // When collision between player + obstacle:

  gameOver() {
    backgroundImage.speed = 0
    playAudio(soundGameOver)
    playAudio(soundPain)
    pauseAudio(soundMantra)

    $restartBtn.style.display = 'inherit';
    $restartBtn.innerText = "REINCARNATE"
    $messageOverlay.style.display = 'inherit';
    $messageOverlay.innerText = "MAY YOU BE HAPPY."
  }

  // Resets game to original state

  reset() {
    gameRunning = true;
    monkeyArr = [];
    monk.x = 40;
    monk.y =  363;
    monk.stateLookRight = true;
    monk.stateLookLeft = false;
    monk.stateGiveOffering = false;
    monk.stateFallOver = false;
    backgroundImage.x = 0;
    backgroundImage.totalX = 0;
    backgroundImage.speed = -0.3;
    pauseAudio(soundsLikeTeenSpirit);
    pauseAudio(soundPain);
    pauseAudio(soundGameOver);
    $message.style.display = 'none';
  }

  // Draws game board

  draw() {

    frameCounter++
    gameCanvas.clearBoard()


    // -----------PLAY AUDIO----------

    playAudio(soundMantra)
    playAudio(soundForest)


    // ----------DRAW BACKGROUND---------

    backgroundImage.move();

    if (backgroundImage.totalX > -(canvas.width * 0)) {
      backgroundImage.drawLandscape();
    } else {
      backgroundImage.drawTransition();
    }


    // -----------DRAW PLAYER-----------

    monk.update()


    // -----------DRAW OBSTACLES-----------

    // One monkey falls every 2 second
    if (frameCounter % 120 === 0) {
      playAudio(soundMonkey)
      let randomPosX = Math.floor(Math.random() * 600)
      monkeyArr.push(new Monkey(randomPosX))
    }


    // -----------CHECK COLLISION-----------

    monkeyArr.forEach((monkey) => {

      if (monk.crashWith(monkey)) {
        monk.stateFallOver = true
        gameCanvas.gameOver() 
        monkey.updateWinningMonkey()

        setTimeout(function () {
          gameRunning = false;
        }, 1000);

        return
      }
      monkey.updateAnimatedMonkey()
    })


    // -----------CHECK IF PLAYER WINS-----------

    if (monk.x > 434 && monk.stateGiveOffering) {
      gameCanvas.nirvana()
      setTimeout(function () {
        gameRunning = false;
      }, 1000);
    }


    // -----------DRAWS ON EVERY FRAMECOUNT 
    // AS LONG AS GAME IS RUNNING-----------

    if (gameRunning) {
      requestAnimFrame(gameCanvas.draw)
      // setTimeout(gameCanvas.draw, 24)
      // window.requestAnimationFrame(gameCanvas.draw)

    }

  }

}