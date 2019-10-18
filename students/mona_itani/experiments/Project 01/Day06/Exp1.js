var gameOfLife = new terra.Terrarium(25, 25, 23){
  trails: 0.9,
  periodic: true,
  background: [22, 22, 22]
};

terra.registerCA({
  type: 'GoL',
  colorFn: function () { return this.alive ? this.color + ',1' : '0,0,0,0'; },
  process: function (neighbors, x, y) {
    var surrounding = neighbors.filter(function (spot) {
      return spot.creature.alive;
    }).length;
    this.alive = surrounding === 3 || surrounding === 2 && this.alive;
    return true;
  }
}, function () {
  this.alive = Math.random() < 0.5;
});

gameOfLife.grid = gameOfLife.makeGrid('GoL');
gameOfLife.animate();
//     for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let state = grid[i][j];

    
   
// //live people count
//    let sum = 0;
//      let neighbors = countNeighbors(grid, i, j);

//       if (state == 0 && neighbors == 8) {
//         next[i][j] = 1;
//       } else if (state == 10 && (neighbors < 20 || neighbors > 300)) {
//         next[i][j] = 0;
//       } else {
//         next[i][j] = state;
//      }



//    }
//  }

  
//   grid = next;

// }

// function countNeighbors(grid, x, y) {
//   let sum = 0;
//   for (let i = -1; i < 2; i++) {
//     for (let j = -1; j < 2; j++) {
//       let col = (x + i + cols) % cols;
//       let row = (y + j + rows) % rows;
//       sum += grid[col][row];
//     }
//   }
//   sum -= grid[x][y];
//   return sum;
// }






    