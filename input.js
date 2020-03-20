let $startBtn = document.getElementById('start-button')
let $message = document.getElementById('message')

// INTERACTIONS USER / SCREEN

$startBtn.innerText = "Begin Pilgrimage"
$message.innerText = "Monk, you must bring this modest offering to Most Venerable Buddha Keanu Reeves in order to pay respect. But watch out for the monkeys..."

window.onload = () => {
  $startBtn.onclick = () => {
      
      gameCanvas = new GameCanvas(800, 450);
      gameCanvas.createBoard()
      $startBtn.style.visibility = 'hidden';
      $message.style.visibility = 'hidden';
    };
  }
  




  var fired = false;

// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {
  switch (event.keyCode) {
    case 37: fired = false; monk.moveLeft();  console.log('key left'); break;
    case 39: fired = false; monk.moveRight(); console.log('key right'); break;
    case 38: fired = false; monk.stateLookRight = true; monk.stateGiveOffering = false; console.log('key up'); break;
    case 40: if(!fired) {fired = true; indexMonkAlfonsoSprite=0;monk.giveOffering(); console.log('key down');} break;
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