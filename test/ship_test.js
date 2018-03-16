const expect = require('chai').expect;

describe('Check for ship', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;
  let player;
  
  before(() => {
    player = {
      ships: [
        {
          locations: [[0,0],[0,1],[0,2]]
        },
        {
          locations: [[1,0],[1,1]]
        },
        {
          locations: [[2,0],[2,1],[2,3],[2,4]]
        }
      ]
    };
  });
  
  it('Should correctly report no ship at a given player\'s coordinate', () => {
    expect(checkForShip(player, [9,9])).to.be.false;
  });
  
  it('Should correctly report a ship located at the given coordinate', () => {
    expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
  });
  
  it('Should correctly report a ship located at more than one coordinate', () => {
    expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9,9])).to.be.false;
  });
  
  it('Should handle checking multiple ships', () => {
    expect(checkForShip(player, [0,0])).to.be.ok;
    expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1,0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1,1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2,4])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9,9])).to.be.false;
  });
});

describe('damageShip', () => {
  const damageShip = require('../game_logic/ship_methods').damageShip;
  
  it('Should register damage on a given ship on a given location', () => {
    let ship = {
      locations: [[0,0]],
      damage: []
    };
    damageShip(ship, [0,0]);
    expect(ship.damage).not.to.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
  
});

describe('Fire!!', () => {
  const fire = require('../game_logic/ship_methods').fire;
  let player;
  
  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0,0]],
          damage: []
        }
      ]
    };
  });
  
  after(() => {
    console.log('Entire test suit completed');
  });
  
  afterEach(() => {
    console.log('-----------One unit test completed------------')
  });
  
  it('Should record damage on the given player ship at a given coordinate', () => {
    fire(player, [0,0]);
    expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
  });
  
  it('Should NOT record damage there are no ships at a given coordinate', () => {
    fire(player, [0,1]);
    expect(player.ships[0].damage).to.be.empty;
  });
});


