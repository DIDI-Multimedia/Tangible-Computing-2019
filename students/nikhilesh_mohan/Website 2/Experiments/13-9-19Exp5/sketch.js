// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05, WEBGL)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
	background(0,0,0)

  // text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)

}



var angle=0


function draw()
{
	background(0)
    directionalLight(0,210,230,0,0,-1)
    rectMode(CENTER)

    noStroke()
    translate(-50,-50,0)
     

    if(mouseX>0&&mouseX<500)
    {
    	rotateX(angle)
    }

    if(mouseX>500&&mouseX<1000)
    {
    	rotateY(angle)
    }

    if(mouseX>1000&&mouseX<windowWidth)
    {
    	rotateZ(angle)
    }

    box(100,100,100)



    angle=(mouseY/100)

  








 
}

