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
  frameRate(10)


}



var noiseMax = 0.1

var r1=10
var r2=30
var s =1
var counter = 0



function draw()
{
  background(0,10)
  translate(windowWidth/2, windowHeight/4)
  perlin(r1, r2)

  r1+=20
  r2+=20

  counter++

  if(counter == 40)
  {
    r1 = 10
    r2 = 10
    counter = 0
  }





}


function perlin(r1, r2)
{

  //stroke(0,210,230)
  //ill()


  var t =0
  var r=100

  beginShape
  stroke(0,210,230)
  noFill() 
  // for(var i=0; i<200; i+=10)
  // {
  //   var r = map(noise(t),0,1,30,70)
    for( var a=0; a<TWO_PI; a+=0.1)
    {
      var xoff = map(cos(a),-1,1,0,noiseMax)
      var yoff = map(sin(a),-1,1,0,noiseMax)
      var r = map(noise(xoff,yoff),0,1,r1,r2) 
      var x= r * cos(a)
      var y= r * sin(a)
      ellipse(x,y,2,2)
    }

    noiseMax+=0.01


 
  endShape(CLOSE)
}

