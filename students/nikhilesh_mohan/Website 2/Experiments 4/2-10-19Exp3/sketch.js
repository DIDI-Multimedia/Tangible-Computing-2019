// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
// make your own creature using this code, share via whatsapp  

// Resource:
// https://www.youtube.com/watch?v=E4RyStef-gY
// - Coding Challenge #74: Clock with p5.js - Daniel Shiffman


var cols, rows
var scl = 30



function setup()
{
  frameRate(24)
  
  createCanvas(windowWidth,windowHeight/2, WEBGL);
  var w=windowWidth
  var h=windowHeight/2

  cols= w/scl
  rows= h/scl


  
}


function draw()
{

  background(0, 5)
  translate(-windowWidth/2.03,0,0)
  rotateX(PI/3)

  stroke(0, 210, 230)
  noFill()
  
  for(var y=0; y<rows-1; y++)
  {
    beginShape(TRIANGLE_STRIP)
    for(var x=0; x<cols; x++)
    {
      vertex(x*scl, y*scl, random(-10,10))
      vertex(x*scl, (y+1)*scl, random(-10,10))

    }
    endShape()
  }

  

}