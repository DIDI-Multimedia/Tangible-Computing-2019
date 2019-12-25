// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup()
{

	let canvas = createCanvas(windowWidth-10,windowHeight/2.05)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder')
	background(34,155,215)




	


	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)
	// x++
	// text(x,x*step, height/2)



}

function draw()
{
	var numElement = 50
   
    textSize(5)
    var step =width/numElement
    var colorstep=255/numElement

   	for(var x=0; x<numElement; x++)
    {
   	  for (var y =0; y<numElement;y++)
      {
        stroke(0)
        //strokeWeight(second()*2)
        fill(x*colorstep+mouseX,y*colorstep+mouseY,200)


        //stroke(255,255,255)
        rect(x*step, y*step, step, step)
        
        text(x,y)
   	  }


    }

  

}