// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');

	background(34,155,215)


}

function draw(){



	background(random(255),155,215)

		// var string = x + "," + y
		// text(string,x*step+20,y*step+20)

	//text (x,x*step,height/2)
	
}


//text (x,x*step,height/2)
//x++
//text (x,x*step,height/2)
//x++
//text (x,x*step,height/2)


function draw(){

	var numElements = 50

var step= width/numElements
textSize(10)
textAlign(CENTER,CENTER)
var colorstep = 255/numElements
//console.log(step)

//var x =0
//var step =10

// var x is the starting value

for (var x = 0 ;x < numElements; x++){
	for (var y = 0 ; y< numElements; y++){

noStroke(255)
strokeWeight(3)
fill(x*colorstep,mouseX,y*colorstep)
rect(x*step,y*step,step,step)
fill(0)


}
}
}


