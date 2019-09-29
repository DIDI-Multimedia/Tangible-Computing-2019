// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05, WEBGL)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.

// SP: "Hi Niki - I refactored your code"


var c = 100 // var c=100, moved this before setup 

function setup() { // put curly brackets like this

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05, WEBGL)

	canvas.parent('sketch-holder')
	background(0,0,0)
    frameRate(30)


  // text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)

}


var c=100

function draw()
{
    camera(0,0,((windowHeight/2)/(tan(PI/6)))+c, 0,0,0, 0,1,0)
    rectMode(CENTER)
	background(0)
    directionalLight(0,210,230,0,0,-1)


    for(var z=1000; z>-1000; z-=40)
    {

}


function draw() {
    
    background(0)
    camera(0,0,((windowHeight/2)/(tan(PI/6)))+c, 0,0,0, 0,1,0)
    rectMode(CENTER)
    directionalLight(0,210,230,0,0,-1)

    for(var z = 1000 ; z> - 1000; z-=40) {


        beginShape()
        translate(0,0,z)
        fill(255)
        noStroke()
        torus(100,10)
        endShape()

    }

    c+=20



  








 

}

