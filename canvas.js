
let canvas = document.getElementById('canvas');
let context = document.getElementById('canvas').getContext('2d');







// var myGameArea = {
//   canvas: document.createElement("canvas"),
//   start: function () {
//     this.canvas.width = 480;
//     this.canvas.height = 270;
//     this.context = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     this.clear = function () {
//       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     };
//     // call updateGameArea() every 20 milliseconds
//     this.interval = setInterval(updateGameArea, 20);
//   },
//   stop: function () {
//     clearInterval(this.interval);
//   },
//   score: function() {
//     var points = Math.floor(this.frames / 5);
//     this.context.font = "18px serif";
//     this.context.fillStyle = "black";
//     this.context.fillText("Score: " + points, 350, 50);
//   }
// };



// array of all obstacles
let monkeyArr = []

let frameCounter = 0



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
      frameCounter = 0
      gameCanvas.clearBoard() 
      this.context.fillStyle = 'blue';
      this.context.font = "30px Arial";
      this.context.fillText("GAME OVER", 40, 40)
    }

    // pauseGame() {
    //   if (!gameRunning) {
    //   gameCanvas.clearBoard() 
    //   this.context.fillStyle = 'blue';
    //   this.context.fillRect(50, 50, 50, 50);
    //   frameCounter = 0
    //   }
    // }

    draw() {
        frameCounter ++
        console.log(frameCounter)
        gameCanvas.clearBoard() 

        
        backgroundImage.move();
   
        if (frameCounter < 200) {
          backgroundImage.drawLandscape();
        } else {
          backgroundImage.drawStatue();
        }
        // console.log(frameCounter)


        // let monk = new Monk(20, 300, 30, 30, 70);
        // let monkey1 = new Monkey(330, 300, 70, 70, 30);

        // monk.loadAndDrawImage(monk, "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg")
        // monkey1.loadAndDrawImage(monkey1, "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg")

        // monk.loadAndDrawImage(monk)

        monk.update()


  
  
      // after each 1 second
      if (frameCounter % 80 === 0) {
          let randomPosX = Math.floor(Math.random() * 300)
          monkeyArr.push(new Monkey(randomPosX))    
          monkeyArr.push(new Monkey(randomPosX)) 
          // console.log('monkeyArr is ' + monkeyArr)
      }
      console.log(gameRunning)



        // Check collision
        monkeyArr.forEach((monkey) => {
          if (monk.crashWith(monkey)) {
              gameRunning = false
              console.log(gameRunning)
              // console.log('monk and monkey have crashed')
              // monkey.monkeyWins()
              // console.log(monkey.y)
              gameCanvas.gameOver()  //MAKE GAME OVER
              return 
          }
          monkey.update()
      })
  


        window.requestAnimationFrame(gameCanvas.draw)
    }

    }

    