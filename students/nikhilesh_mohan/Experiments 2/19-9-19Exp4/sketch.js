// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 


function setup()
{

  let canvas = createCanvas(windowWidth,windowHeight/2)
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder')
  frameRate(120)

  angleMode(DEGREES)
  //background(255,255,255)

}

 var angle = 0
 var s =10

 var counter = 0


function draw()
{

  background(0,3)
  rectMode(CENTER)

  translate(windowWidth/2.1,windowHeight/4)
  noFill()
  stroke(0,210,230)
  strokeWeight(3)
  rotate(angle)
  rect(0,0,s,s)

  angle+=3
  s+=10

  if(counter == 150)
  {
    s=10
    counter = 0
  }
  counter++



}