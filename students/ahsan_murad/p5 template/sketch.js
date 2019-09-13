// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
}

	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	
function draw(){		
	background(0)
	var numElements = 25
	textSize(10)
	var step = width/numElements
	var colorStep = 255/numElements
	textAlign(CENTER,CENTER)
	//console.log(step)

	for (var x = 0 ; x < numElements; x++){
			for (var y = 0; y <numElements; y++){

				stroke(255)
				strokeWeight(second()/3)
				fill(x*colorStep,y*colorStep,200)
				rect(x*step,y*step,step,step)
				//fill(0)
				//var string = x + "," + y
				//text(string,x*step+25,y*step+25)	
			}
		}
	}
	//	text(x,x*step,height/2)
	//text(x,x*step,height/2)
	//x++
	//text(x,x*step,height/2)
	//x++
	//text(x,x*step,height/2)
	//

//function draw(){


//}