function checkForShip (player, coordinate) {
  let shipPresent;
  
  for (let ship of player.ships) {
    shipPresent = ship.locations.filter((location) => {
      return (location[0] === coordinate[0]) && (location[1] === coordinate[1]);
    });
    if(shipPresent[0]) {
      return ship;
    }
  }
  
  return false;
}

function damageShip (ship, coordinates) {
  ship.damage.push(coordinates);
}

function fire (player, coordinate) {
  let ship = checkForShip(player, coordinate);
  
  if(ship) damageShip(ship, coordinate);
}

module.exports = {
  checkForShip: checkForShip,
  damageShip: damageShip,
  fire: fire
};