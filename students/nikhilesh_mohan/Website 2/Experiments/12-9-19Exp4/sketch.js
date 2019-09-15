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
    frameRate(10)


}





function draw()
{
    background(0)
    var numlines=60
    var step=(windowWidth+500)/numlines

    fill(0,210,230,50)
    noStroke()
    for(var i = 0; i<step; i+=2)
    {
        for(var j=0; j<step; j+=2)
        {
            rect(i*step,j*step,step+((mouseX-50)/5), step+((mouseY-50)/5))
        }
        
    }



}




    




