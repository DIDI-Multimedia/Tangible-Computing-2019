function make2DArray (cols, rows){

  let array = []

  for (var i = 0; i < cols; i++){

    let row = []

    for (var j = 0; j < rows; j++){

      let obj = {
      
        x:i, 
        y:j,
        state: (random()>0.5) 

      }
    
      row.push(obj)
    
    }

      array.push(row)
  }

  // console.log(array[4][3])

  // let i = 3 
  // let j = 3 


  // let cell = array[i][j]
  // n2 = array[i+1][j]
  //  n1 = array[i-][j]
  // let arr = new Array(cols);
  // for (let i =0; i < arr.length; i++) {
  //   arr [i] = new Array(rows);

  // }

  return array 

}

let grid;
let cols;
let rows;
let resolution = 9;


function setup(){
  createCanvas(600,600);
  cols = width / resolution;
  rows = height / resolution;
  grid = make2DArray(cols, rows);



}

function draw(){
  background(255)

  grid = eat()
  display()



}

function display(){

  for (var x = 0; x < grid.length; x++){

    let row = grid[x]

    for (var y = 0; y < row.length; y++){

      let cell = grid[x][y]

      fill(25,24,12)
      stroke(0)
      

      if (cell.state){
         fill(22,34,123)
      }
     
    rect(cell.x*resolution,cell.y*resolution,resolution,resolution)
      



    }

  }

}

function eat(){

  let newGrid = []

  for (var i = 0; i < grid.length; i++){

    let newRow = []
    let row = grid[i]

    for (var j = 0; j < row.length; j++){

      let score = 0
      let cell = grid[i][j]

      let a =  constrain(i-1, 0, grid.length); 
      let b =  constrain(i+1, 0, grid.length); 
      let c =  constrain(j-1, 0, row.length); 
      let d =  constrain(j+1, 0, row.length); 

  

      let n1 = grid[a][c]
      let n2 = grid[a][j]
      let n3 = grid[a][d]
      // console.log(n1)

      let n4 = grid[i][c]
      let n6 = grid[i][d]

      //let n7 = grid[a][j]
      //let n8 = grid[a][c]
      // let n9 = grid[b][d]

      let neighbours = [n1,n2,n3,n4,n6]

      for (var r = 2; r < neighbours.length; r++){
        if (neighbours[r]){
          score += neighbours[r].state
        }
 
      }
      // console.log(score,a,b,c,d)

      let obj = {
      
        x:i, 
        y:j,

      }
      if (score > 1){
        obj.state = false
      } else if (random()<5) {
        obj.state =true 

      }
 

      newRow.push(obj)


    }
    newGrid.push(newRow)

  }

  return newGrid

}
// function draw(){
//   background(0);



//   for (let i = 0 ; i < cols; i++){
//    for (let j = 0; j< rows; j++){
//     let x = i * resolution;
//     let y = j * resolution;
//     if (grid[i][j]==1){
//       // fill(random(255));
//       fill(255)
//       stroke(0);
//       strokeWeight(1)
//     ellipse(x,y, resolution-1,resolution-1); 
//     // ellipse(x,y,)
//     }
//    }
//   }

//    let next = make2DArray(cols, rows);
//    //grid

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






    