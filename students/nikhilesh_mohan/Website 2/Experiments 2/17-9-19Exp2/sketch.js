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
  frameRate(30)
	//background(255,255,255)

	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)



}

  var x=100
  var y=100

  var x1=1000
  var y1=50

  var x2=700
  var y2=200

  var xspeed = 6
  var yspeed = 6

  var xspeed1 = 6
  var yspeed1 = 6

  var xspeed2 = 5
  var yspeed2 = 5


function draw()
{
  background (0,5)

  var r1=70
  var r2=100
  
  x+=xspeed
  y+=yspeed

  if( x+80 > windowWidth || x-60 <0)
  {
    xspeed *= -1
  }

  if( y+80 > windowHeight/2 || y-60 <0)
  {
    yspeed *= -1
  }

  trondisc(r1,r2,x,y)

  

  x1-=xspeed1
  y1+=yspeed1

  if( x1+80 > windowWidth || x1 < 0)
  {
    xspeed1 *= -1
  }

  if( y1+80 > windowHeight/2 || y1 < 0)
  {
    yspeed1 *= -1
  }

  trondisc(r1,r2,x1,y1)



  x2-=xspeed2
  y2+=yspeed2

  if( x2+80 > windowWidth || x2 < 0)
  {
    xspeed2 *= -1
  }

  if( y2+80 > windowHeight/2 || y2 < 0)
  {
    yspeed2 *= -1
  }

  trondisc(r1,r2,x2,y2)

}


function trondisc(r1,r2,x,y)
{

  noFill()
  strokeWeight(5)
  stroke(sin(step)*range+180, sin(step1)*range1+100, sin(step2)*range2+12) 

  step += 0.05
  step1 += 0.05
  step2 += 0.05


  beginShape()
  fill(0)
  ellipse(x, y, r2,r2)
  endShape()

  beginShape()
  noFill()
  strokeWeight(5)
  stroke(sin(step)*range+180, sin(step1)*range1+100, sin(step2)*range2+12)
  ellipse(x, y, r1,r1)
  endShape()

  noStroke()
  fill(0)
  rect(x-5, y+30, 15,15)

}



