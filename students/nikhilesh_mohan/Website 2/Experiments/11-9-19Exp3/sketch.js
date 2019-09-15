// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
	background(0,0,0)
    frameRate(30)

}






function draw()
{
    
    var rad=1500

    for(var x=0; x<150; x++)
    {
        background(0,5)
        stroke(0,210,230)
        noFill()
        ellipse(mouseX,mouseY,rad,rad)
        rad-=10
    }
    

}

    




