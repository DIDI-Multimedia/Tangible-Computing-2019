console.log('sketch.js')

let i = 0

function setup(){

  createCanvas(800,800);
  stroke(255)
  noStroke()

}
function draw(){

  let numCol = 10
  let numRow = 10
  let stepX = width / numCol // height of box 
  let stepY = height / numRow // width of box 
   
  background(255)

  for (var col = 0; col < numRow; col++){
    for (var row = 0; row < numCol; row++){

      let r = noise(col/numCol + i)*255
      let g = noise(row/numRow + i )*255
      let b = noise(i)*255
      fill(r,g,b)
      rect(row*stepX,col*stepY,stepX,stepY) 
    }
  }

  i += 0.01
}