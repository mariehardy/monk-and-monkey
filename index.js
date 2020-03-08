// INTERACTIONS USER / SCREEN

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameCanvas = new GameCanvas(600, 400);
      gameCanvas.createBoard()
    };
  }
  





// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {
  switch (event.keyCode) {
    case 37: monk.moveLeft();  console.log('left'); break;
    case 39: monk.moveRight(); console.log('right'); break;
    // case 32: monk.spaceBar();  console.log('space bar'); break;
  }
  // gameCanvas.createBoard()
})
