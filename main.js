let canvas = document.getElementById('canvas')
let context = document.getElementById('canvas').getContext('2d');


class Component {
  constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      // this.img = new Image();
      this.speedX = 0;
      this.speedY = 0;
  }

  update() {
    context.fillStyle = 'red';
    context.fillRect(50, 50, 60, 60);
  }

}

class Monk extends Component {
  constructor(karmaPoint) {
      super(karmaPoint) // super needs to be specified first, like here

      this.karmaPoint = karmaPoint



    //   this.img = new Image();

    // // HOW TO REFER TO MONK.x ??? 
  
    //   this.img.onload = function() {
    //     context.drawImage(this.img, 200, 200, 30, 30);
    //   }
    //   this.img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
      


      

  }

  loadAndDrawImage() {
    let img = new Image();
    img.onload = function() {
      context.drawImage(img, 200, 200, 30, 30);
    }
    img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
    }

  pray() {
    // kneel()  // canvas activity
    this.gainKarmaPoints(100)
  }

  gainKarmaPoints(num) {
    this.karmaPoint += num
  }



}




class Monkey extends Component {
  constructor() {
      super() // super needs to be specified first, like here
      // this.name = name
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


