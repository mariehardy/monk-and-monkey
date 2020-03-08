


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








// MONK AS OBJECT


let monk = {
  x : 20,
  y : 200,
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
  crashWith: function (obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  },
  moveLeft: function () {
    if (this.x > 20) {
    this.x -= 4;
    console.log('monk x is ' + this.x)
    }     console.log('left boundary ' + this.x)

  },
  moveRight: function () {
    if (this.x < (canvas.width - 50)) {
    this.x += 4;
    console.log('monk x is ' + this.x)
    }     console.log('right boundary ' + this.x)

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
      context.drawImage(img, this.x, this.y, this.width, this.height);
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




class Monkey {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speedX = 0;
    this.speedY = 0; 
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
    this.y += 30
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