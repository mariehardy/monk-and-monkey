let $startBtn = document.getElementById('start-button')
$startBtn.style.display = 'inherit';
let $message = document.getElementById('message')
$message.style.display = 'inherit';
let $main = document.getElementsByTagName('main')[0]
let $restartBtn = document.getElementById('restart-button')
$restartBtn.style.display = 'none';
let $messageOverlay = document.getElementById('messageOverlay')
$messageOverlay.style.display = 'none';
let $messageOverlayBrief = document.getElementById('messageOverlayBrief')
$messageOverlayBrief.style.display = 'none';


// ----------LOADS TITLE SCREEN------------

function titleScreen() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "./img/monandmonkey_title.jpg");
  x.setAttribute("id", "title")
  x.setAttribute("alt", "Monk and Monkey");
  $main.appendChild(x);
}

titleScreen()

$startBtn.innerText = "Begin Pilgrimage"
$message.innerText = "Monk, you must bring this modest offering to Most Venerable Buddha Keanu Reeves in order to pay respect. But watch out for the monkey..."



// ----------START & RESTART BUTTONS------------

window.onload = () => {
  $startBtn.onclick = () => {
    document.getElementById("title").remove()
    gameCanvas = new GameCanvas(800, 450);
    gameCanvas.createBoard()
    $startBtn.style.display = 'none';
    $message.style.display = 'none';
  };
  $restartBtn.onclick = () => {
    document.location.reload();
    // gameCanvas.reset()
    gameCanvas = new GameCanvas(800, 450);
    gameCanvas.createBoard()
    $restartBtn.style.display = 'none';
    $messageOverlay.style.display = 'none';
  };
}



// ------- REACT TO USER PRESSING KEYS ---------


let fired = false;

document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {
  switch (event.keyCode) {
    case 37:
      fired = false;
      monk.moveLeft();
      break;
    case 39:
      fired = false;
      monk.moveRight();
      break;
    case 38:
      fired = false;
      monk.stateLookRight = true;
      monk.stateGiveOffering = false;
      break;
    case 40:
      if (!fired) {
        fired = true;
        indexMonkAlfonsoSprite = 0;
        monk.giveOffering();
      }
      break;
      // case 40: if(!fired) {fired = true; monk.duck(); console.log('key down');} break;
  }
})

// document.addEventListener('keyup', event => {   // The same as: document.keydown = event => {
//   if (event.isComposing || event.keyCode === 40) {
//     monk.duck();
//     console.log('keyup - duck')
//     return;
//   }

// })