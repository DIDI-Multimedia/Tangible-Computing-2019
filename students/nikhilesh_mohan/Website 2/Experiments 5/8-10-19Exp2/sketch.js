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



function drawLineRecursion(l, numLines)
{
  rectMode(CENTER)
  stroke(0,random(170),random(200),1)
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




