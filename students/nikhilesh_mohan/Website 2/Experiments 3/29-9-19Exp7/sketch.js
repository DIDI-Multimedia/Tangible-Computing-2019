// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// 18-9-19 

var slider


function setup() 
{
  let canvas = createCanvas(windowWidth,windowHeight/2)
  canvas.parent('sketch-holder')
  slider = createSlider(0,255,100)
  slider.position(200,windowHeight/1.2)
  //slider.style('width' , '80px')
}

var t=0
var counter=0
function draw() 
{
  var val = slider.value()
  background(0,5)

  noFill()
  stroke(0,210,230)

  for(var i=0; i<val; i+=100)
  {
    ellipse(windowWidth/2,windowHeight/4,t,t)
    t+=0.1
    counter++
    if(counter>100)
    {
      u=t
      ellipse(windowWidth/2,windowHeight/4,u-500,u-500)
      u++
      counter=0
    }
  }


}

