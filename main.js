


// class Component {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//   }

//   loadAndDrawImage(obj, url) {
//     let img = new Image();
//     img.onload = function () {
//       context.drawImage(img, obj.x, obj.y, obj.width, obj.height);
//     }
//     img.src = url;
//   }

//   //To add getters and setters in the class, use the get and set keywords.


//   update() {
//     context.fillStyle = 'red';
//     context.fillRect(50, 50, 60, 60);
//   }

// }





let gameRunning = true




// let img = new Image();
// img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';



let backgroundImage = {
  // img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  drawLandscape: function() {
    let img = new Image();
    img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';
    img.onload = context.drawImage(img, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(img, this.x + canvas.width, 0);
    } else {
      context.drawImage(img, this.x - img.width, 0);
    }
  },

  drawStatue: function() {
    let img = new Image();
    img.src = 'https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg';
    img.onload = context.drawImage(img, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(img, this.x + canvas.width, 0);
    } else {
      context.drawImage(img, this.x - img.width, 0);
    }
  },
};



// MONK AS OBJECT


let monk = {
  x : 40,
  y : 370,
  width : 30,
  height : 30,
  speedX : 0,
  speedY : 0,
  karmaPoint : 60,
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
    this.x -= 4;
    // console.log('monk x is ' + this.x)
    }     

  },
  moveRight: function () {
    if (this.x < (canvas.width - 50)) {
    this.x += 4;
    // console.log('monk x is ' + this.x)
    }     
  },
  duck: function () {
    if (this.height = 30) {
      // this.y += this.height / 2;
      this.height = this.height / 2;
    } 
  },
  duckUp: function () {
    this.height = 30
    this.y = this.y;
  },
  shift: function () {
    if (gameRunning) {
      gameCanvas.pauseGame()
    }
  },
  pray: function () {
    // kneel()  // canvas activity
    this.gainKarmaPoints(100)
  },
  gainKarmaPoints: function(num) {
    this.karmaPoint += num
  },
  // loadAndDrawImage: function(obj) {
  //   let img = new Image();
  //   img.onload = function () {
  //     context.drawImage(img, obj.x, obj.y, obj.width, obj.height);
  //   }
  //   img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
  // },
  update: function() {
    // that = this;
    let img = new Image();
    // img.onload = function () {
      img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      img.onload = context.drawImage(img, this.x, this.y, this.width, this.height);
    // }
  }


}



























// MONK AS CLASS

// class Monk extends Component {
//   constructor(x, y, width, height, karmaPoint) {
//     super(x, y, width, height) // super needs to be specified first, like here
//     this.karmaPoint = karmaPoint
//   }

//   top() {
//     return this.y
//   }
//   left() {
//     return this.x
//   }
//   bottom() {
//     return this.y + this.height
//   }
//   right() {
//     return this.x + this.width
//   }

//   crashWith(obstacle) {
//     return !(
//       this.bottom() < obstacle.top() ||
//       this.top() > obstacle.bottom() ||
//       this.right() < obstacle.left() ||
//       this.left() > obstacle.right()
//     );
//   }

//   moveLeft() {
//     this.x -= 30;
//     console.log('monk x is ' + this.x)
//   }

//   moveRight() {
//     this.x += 30;
//     console.log('monk x is ' + this.x)
//   }

//   pray() {
//     // kneel()  // canvas activity
//     this.gainKarmaPoints(100)
//   }

//   gainKarmaPoints(num) {
//     this.karmaPoint += num
//   }


// }


let gravity = 0.1

class Monkey {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speedX = 0;
    this.speedY = 0; 
    this.velocityX = 5;
    this.velocityY = 5;
  }

  top() {
    return this.y
  }
  left() {
    return this.x
  }
  bottom() {
    return this.y + this.height
  }
  right() {
    return this.x + this.width
  }

  update() {
    let img = new Image();
    // img.onload = function () {
      img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      img.onload = context.drawImage(img, this.x, this.y, this.width, this.height);

      // this.velocityY += gravity;
      this.y += this.velocityY;
      if (this.y + this.velocityY > canvas.height - 60 || this.y + this.velocityY < 0) {
        this.velocityY *= -1;
      } 
      if (this.y === 0 || this.velocityY === -1) {
        this.y=-100;
      } 
      // if (this.x + this.velocityX > canvas.width || this.x + this.velocityX < 0) {
      //   this.velocityX *= -1;
      // }
    }

    monkeyWins() {
      // laughing monkey sound
      // offering appears in  monkeys hands
      // monkey goes back up with offering

      // let img = new Image();
      // img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      // context.drawImage(img, this.x, this.y, this.width, this.height);
      context.fillStyle = 'blue';
      context.fillRect(this.x + 10, this.y + 10, 5, 5);
      this.y=-5
    }

  }







class Game {

  // IMPLEMENT GAME LOGIC HERE -- FUNCTIONS

}








// context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
// sx  =		The x coordinate where to start clipping


// **********************************
// Loading the image programmatically
// **********************************


// function loadAndDrawImage(url)
// {
//     // Create an image object. This is not attached to the DOM and is not part of the page.
//     var image = new Image();

//     // When the image has loaded, draw it to the canvas
//     image.onload = function()
//     {
//         // draw image...
//     }

//     // Now set the source of the image that we want to load
//     image.src = url;
// }
// loadAndDrawImage("http://www.w3.org/html/logo/img/mark-word-icon.png");