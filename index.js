let canvas = document.getElementById('canvas')
let context = document.getElementById('canvas').getContext('2d');

class Component {
  constructor(width, height, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = new Image();;
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
      this.context = document.getElementById('canvas').getContext('2d');

      this.karmaPoint = karmaPoint
      this.img = new Image();
            // img.src = "../images/gameover.png"
            // this.context.drawImage(img, 20, 100, 100, 10);
      // function draw(ghost) {
      this.img.onload = function() {
        this.img.src = "https://banner2.cleanpng.com/20180325/ute/kisspng-emoji-love-heart-sticker-emoticon-emoji-5ab86fdec2e6d0.1707378915220367027983.jpg";
        this.context.drawImage(this.img, 200, 200, 50, 50);
      }
  }


}




class Monkey extends Component {
  constructor() {
      super() // super needs to be specified first, like here
      // this.name = name
  }
}







window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameCanvas = new GameCanvas(800, 640);
      gameCanvas.createBoard()
    };
  }
  





// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {
})