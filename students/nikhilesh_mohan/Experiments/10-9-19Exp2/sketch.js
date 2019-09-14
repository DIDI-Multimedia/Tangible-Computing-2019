// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


var rad=20

function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
	background(0,0,0)

  // text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)



}



function draw()
{
	var rad = random(20,50)

	fill(0, 5)
	rect(0,0,windowWidth-10,windowHeight/2.05)

    noStroke()
	fill(0,220,230)
	ellipse(random(windowWidth-10), random(windowHeight/2.05), rad,rad)

 
}

