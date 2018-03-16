const fire = require('./ship_methods').fire;

function checkGameStatus (players) {
  return false;
}

function takeTurn (opossingPlayer, guessFunction) {
  let coordinate = guessFunction();
  fire(opossingPlayer, coordinate);
  let gameOver = checkGameStatus();
  
  return gameOver;
}

module.exports = {
  checkGameStatus: checkGameStatus,
  takeTurn: takeTurn
};