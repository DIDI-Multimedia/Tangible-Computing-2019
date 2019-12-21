// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


let range = 190-111 
let step = 0.01 

let range1 = 100-195
let step1 = 0.01

let range2 = 12-223
let step2 = 0.01

function setup()
{

	let canvas = createCanvas(windowWidth,windowHeight/2)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
  frameRate(24)
	//background(255,255,255)

	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)



}

function draw()
{

  var r1=100
  trondisc(r1)





}


function trondisc(r1)
{

  noFill()
  strokeWeight(5)
  stroke(sin(step)*range+180, sin(step1)*range1+100, sin(step2)*range2+12) 

  step += 0.05
  step1 += 0.05
  step2 += 0.05

  beginShape()
  ellipse(windowWidth/2, windowHeight/4, r1,r1)
  ellipse(windowWidth/2, windowHeight/4, 170,170)
  endShape()
  noStroke()
  fill(0)
  rect((windowWidth/2)-10, (windowHeight/4)+40, 20,25)



}



