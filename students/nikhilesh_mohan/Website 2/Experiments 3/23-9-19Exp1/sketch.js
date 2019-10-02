// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
var k = 5/8
var slider

function setup()
{

	let canvas = createCanvas(windowWidth,windowHeight/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
  frameRate(24)
	//background(255,255,255)

  slider = createSlider(1,10,5,0.1)

}



function draw()
{
  //k= slider.value()
  background(0)
  translate(windowWidth/2, windowHeight/4)
  
  beginShape()
  stroke(0,210,230)
  noFill()
  for(var a=0; a<TWO_PI*8; a+=0.01)
  {
    var r = 200 * cos(k*a)
    var x = r* cos(a)
    var y = r* sin(a)
    vertex(x,y)
  }
  endShape(CLOSE)





}





