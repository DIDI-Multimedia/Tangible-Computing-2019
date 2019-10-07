function setup() {
  let canvas = createCanvas(400,400)
  canvas.parent('sketch-holder');

  background(0)


  // drawLineRecursion(line, numLines)

}

function draw(){

  let line = {
    x1: width/2,
    y1: 0,
    x2: width/2,
    y2: height,
  }

  let numLines = 10
    
    drawLineRecursion(line,numLines)
    
}


function drawLineRecursion(l,numLines){

  stroke(0)
  strokeWeight(5)
  fill(random(255),random(255),random(255))
  push()
  translate(0,height/2)
  ellipse(l.x1,l.y1,numLines*25,numLines*25)
  pop()

  numLines = numLines - 1

  if (numLines > 0){
    drawLineRecursion(l,numLines)
  }

  // drawLineRecursion()

}
