// INTERACTIONS USER / SCREEN

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameCanvas = new GameCanvas(800, 400);
      gameCanvas.createBoard()
    };
  }
  





// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {

  switch (event.keyCode) {
    
    case 37: monk.moveLeft();  console.log('left'); break;
    case 39: monk.moveRight(); console.log('right' + monk.updateAnimatedPlayer()); break;
    case 40: monk.duck(); console.log('keydown - duck'); break;
    case 16: monk.shift();  console.log('shift'); break;
  }
})

document.addEventListener('keyup', event => {   // The same as: document.keydown = event => {
  if (event.isComposing || event.keyCode === 40) {
    monk.duckUp()
    console.log('keyup - duck')
    return;
  }

})