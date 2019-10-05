// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 



function setup() 
{
  let canvas = createCanvas(windowWidth,windowHeight/2)
  canvas.parent('sketch-holder')
  frameRate(10)
}

var t = 0

function draw() 
{
  background(0,20)
  noStroke()
  fill(0,210,230)

  for(var i= 0; i<windowWidth; i++)
  {
    translate(5,0,0)
    var x = noise(t)
    x=map(x,0,1,0,windowHeight/2)
    ellipse(0, x, 1,1)
    t+=0.01
  }

}

