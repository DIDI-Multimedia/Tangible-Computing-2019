// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup()
{

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
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
	var numElement = 100
   
    textSize(10)
    var step =width/numElement
    var colorstep=255/numElement


    for(var x=0; x<numElement; x++)
    {
    	for (var y =0; y<numElement;y++)
    	{

             stroke(255)
             strokeWeight(second()*2)
    		 fill(x*colorstep,y*colorstep,200)
    		 //stroke(255,255,255)
    		 rect(x*step, y*step, step, step)


    	}

         
    }


  

}