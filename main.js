let gameRunning = true

let gravity = 0.2




let img1 = new Image();
img1.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';
let img2 = new Image();
img2.src = 'https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg';


let backgroundImage = {
  x: 0,
  totalX : 0,
  speed: -1,

  move: function() {
    this.totalX += this.speed;
    this.x += this.speed;
    this.x %= canvas.width;
  },

  drawLandscape: function() {
    context.drawImage(img1, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(img1, this.x + canvas.width, 0);
    } else {
      context.drawImage(img1, this.x - img1.width, 0);
    }
  },

  drawTransition: function() {
    context.drawImage(img1, this.x, 0);
    if (this.speed < 0) {
      context.drawImage(img2, this.x + canvas.width, 0);
    } else {
      context.drawImage(img2, this.x - img2.width, 0);
    }
  },

  stopMoving: function() {
    this.x = 0
  },

  drawStatue: function() {
    context.drawImage(img2, this.x, 0);
  }
}





// PLAYER

let monk = {

  // http://jlongster.github.io/canvas-game-bootstrap/
  
  // var player = {
  //   pos: [0, 0],
  //   sprite: new Sprite('img/sprites.png', [0, 0], [39, 39], 16, [0, 1])
  // };

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
    this.x -= 2;
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
      this.y += this.height / 2;
      this.height = this.height / 2;
      
    } 
  },
  duckUp: function () {
    this.height = 30
    this.y -= this.height / 2;
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
  update: function() {
    // that = this;
    let img = new Image();
    // img.onload = function () {
      img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      context.drawImage(img, this.x, this.y, this.width, this.height);
    // }
  }


}




// OBSTACLES

class Monkey {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speedX = 0;
    this.speedY = 0; 
    this.velocityX = 9;
    this.velocityY = 9;
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
      context.drawImage(img, this.x, this.y, this.width, this.height);

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

      let img = new Image();
      img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      context.drawImage(img, this.x, this.y, this.width, this.height);
      context.fillStyle = 'blue';
      context.fillRect(this.x + 5, this.y + 5, 10, 10);
      this.y=-100
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


















// Constructor for the Sprite class

// function Sprite(url, pos, size, speed, frames, dir, once) {
//   this.pos = pos;
//   this.size = size;
//   this.speed = typeof speed === 'number' ? speed : 0;
//   this.frames = frames;
//   this._index = 0;
//   this.url = url;
//   this.dir = dir || 'horizontal';
//   this.once = once;
// };


// Every Sprite object has an update method for updating the animation

// Sprite.prototype.update = function(dt) {
//   this._index += this.speed*dt;
// }


// Every Sprite object also has a render method for actually drawing itself

// Sprite.prototype.render = function(ctx) {
//   var frame;

//   if(this.speed > 0) {
//       var max = this.frames.length;
//       var idx = Math.floor(this._index);
//       frame = this.frames[idx % max];

//       if(this.once && idx >= max) {
//           this.done = true;
//           return;
//       }
//   }
//   else {
//       frame = 0;
//   }


//   var x = this.pos[0];
//   var y = this.pos[1];

//   if(this.dir == 'vertical') {
//       y += frame * this.size[1];
//   }
//   else {
//       x += frame * this.size[0];
//   }

//   ctx.drawImage(resources.get(this.url),
//                 x, y,
//                 this.size[0], this.size[1],
//                 0, 0,
//                 this.size[0], this.size[1]);
// }


// in: Draw everything

// function renderEntity(entity) {
//   ctx.save();
//   ctx.translate(entity.pos[0], entity.pos[1]);
//   entity.sprite.render(ctx);
//   ctx.restore();
// }