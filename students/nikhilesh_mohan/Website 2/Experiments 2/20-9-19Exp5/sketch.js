// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 

// Resource
// Coding Challenge #136.1: Polar Perlin Noise Loops
// https://www.youtube.com/watch?v=ZI1dmHv3MeM&t=507s



function setup()
{

  let canvas = createCanvas(windowWidth,windowHeight/2)
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder')
  frameRate(12)


}

var noiseMax = 0.1

function draw()
{
  background(0)
  translate(windowWidth/2, windowHeight/4)
  perlin()

  translate(-700, -150)
  perlin()

  translate(300, 70)
  perlin()

  translate(800, 0)
  perlin()

  translate(300, -40)
  perlin()




}


function perlin()
{

  stroke(0,210,230)
  //ill()

  var t =0
  var r=100

  beginShape 
  for(var i=0; i<200; i+=10)
  {
    var r = map(noise(t),0,1,30,70)
    for( var a=0; a<TWO_PI; a+=0.1)
    {
      var xoff = map(cos(a),-1,1,0,noiseMax)
      var yoff = map(sin(a),-1,1,0,noiseMax)
      var r = map(noise(xoff,yoff),0,1,50,100) 
      var x= (r+i) * cos(a)
      var y= (r+i) * sin(a)
      ellipse(x,y,4,4)
    }

    noiseMax+=0.1

  }
 
  endShape(CLOSE)
}