// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
// make your own creature using this code, share via whatsapp  



function setup()
{
  createCanvas(windowWidth,windowHeight/2)
  background(0)

  let line = 
  {
    x1: width/2,
    y1: 0,
    x2: width/2,
    y2: height,

  }

  let numLines = 20


  drawLineRecursion(line, numLines)
}


var c=170

let range = 111-190
let step = 0.01 

let range1 = 195-100
let step1 = 0.01

let range2 = 223-12
let step2 = 0.01

function drawLineRecursion(l, numLines)
{
  rectMode(CENTER)
  stroke(sin(step)*range+180, sin(step1)*range1+100, sin(step2)*range2+12, 50) 

  step -= 0.05
  step1 -= 0.05
  step2 -= 0.05

  strokeWeight(numLines*25)
  noFill()

  //rect(windowWidth/2, windowHeight/4,numLines, numLines)


  let mid=(l.y1+l.y2)/2
  line(l.x1, l.y1, l.x2, l.y2)

  numLines--

  let lineA = 
  {
    x1: l.x1,
    y1: l.y1,
    x2: l.x2,
    y2: mid,
  }

  let lineB = 
  {
    x1: l.x1,
    y1: mid,
    x2: l.x2,
    y2: l.y2,
  }

  if(numLines>0)
  {
    drawLineRecursion(lineA,numLines)
    drawLineRecursion(lineB,numLines)
  }

  // drawLineRecursion()

}




