// var obstacleArr = [];


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



class GameCanvas {
    constructor(width, height) {
      this.canvas = document.getElementById('canvas')
      this.context = document.getElementById('canvas').getContext('2d');
      this.canvas.width = width;
      this.canvas.height = height;
      this.width = this.canvas.width;
      this.height = this.canvas.height;

    }
  
    createBoard() {
      this.context.clearRect(0, 0, this.width, this.height)
      console.log(this.height)
      this.draw()
    }

    draw() {
        let monk = new Monk(200, 200, 200, 200);
        let monkey = new Monkey();
        monk.loadAndDrawImage("https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg")

        // monk.pray()

        
            
        window.requestAnimationFrame(gameCanvas.draw)
    }

    }
