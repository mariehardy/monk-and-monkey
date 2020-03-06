// INTERACTIONS USER / SCREEN

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameCanvas = new GameCanvas(800, 640);
      gameCanvas.createBoard()
    };
  }
  





// React to user pressing a key
document.addEventListener('keydown', event => {   // The same as: document.keydown = event => {
})