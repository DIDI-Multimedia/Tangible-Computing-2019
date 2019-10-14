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

  let numLines = 25
    
    drawLineRecursion(line,numLines)
    
}


function drawLineRecursion(l,numLines){

  strokeWeight(numLines*25)
  stroke (random(255),random(0),random(255))
  push()
  // translate(0,height/2)

  line(l.y2,l.x2,l.x1,l.y2)
    line(l.y2*2,l.x2*2,l.x1,l.y2)
 
  line(l.x1,l.y1*2,l.x2*8,l.y2)
  pop()

  numLines = numLines - 1

  if (numLines > 0){
    drawLineRecursion(l,numLines)
  }

  // drawLineRecursion()

}







