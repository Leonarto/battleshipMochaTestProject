const expect = require('chai').expect;

// Using xdescribe make all inner "it()"s pending
describe('GAME INSTANCE FUNCTIONS', () => {
  describe('check game status', () => {
    const checkGameStatus = require('../game_logic/game_instance').checkGameStatus;
    // Not giving a function to "it()" make's it pending
    it('Should tell me when the game is over', () => {
      let players = [
        {
          ships: [
            {
              locations: [[0,0]],
              damage: [[0,0]]
            }
          ]
        }
      ];
      let actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
  
  describe('Take turn', () => {
    const takeTurn = require('../game_logic/game_instance').takeTurn;
    let guess, player;
    
    beforeEach(() => {
      guess = () => [0,0];
      player = {
        ships: [
          {
            locations: [[0,0]],
            damage: []
          }
        ]
      };
    });
    
    it('Should return false if the game ends', () => {
      let actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });
  });
  
  function saveGame (callback) {
    setTimeout(() => {
      callback();
    }, 1000);
  }
  
  describe('Save game', () => {
    // Putting an argument on "it()" callback function, makes it helpful for asyncronus functions
    it('Should update save status', (done) => {
      let status = 'Game not saved...';
      
      saveGame(() => {
        status = 'Game saved!';
        expect(status).to.equal('Game saved!');
        done()
      });
      
    });
  });
  
});