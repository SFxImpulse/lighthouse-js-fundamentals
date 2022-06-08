const moves = ['north', 'north', 'west', 'west', 'north', 'east','north',];

const finalPosition = function (moves) {

  let x = 0
  let y = 0

  for (move of moves) {
    
    switch (move) {
      case 'north':
        y += 1
        break;
      case 'south':
        y -= 1
        break;
      case 'east':
        x += 1
        break;
      case 'west':
        x -= 1
      default:
        x += 1
        break;
    }
  }

  console.log([x, y])
  return [x, y]

}

finalPosition(moves);