// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	var x = 3
		// for (var x = 0; x < numElements; x++){
	// fill(random(255),random(255),random(255))
	// ellipse(x*step,height/2,step/2,step/2)

	// fill(random(255),random(255),random(255))
	// ellipse(x*step,height/5,step/2,step/2)

	// }
}
	// for (var x=0 ; x < 100; x++){
	// 	text(x,x*step,height/2)
	
	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)


function draw(){

background(255)

fill(random(255),random(255),random(255))
ellipse(50,50,random(0,width),random(0,height))

	for (var x= 3; x < 100; x++){}
		fill(random(255),random(255),random(255))
		ellipse(x+5,50,mouseX,mouseY)
		stroke(10)
		}
	
	// var numElements = 25
	// // var x = 0
	// textSize(10)
	// var step = width/numElements
	// var colorStep = 255/numElements
	// textAlign(CENTER,CENTER)
	// // console.log(step)

	// for (var x = 0; x < numElements; x++){
	// 	for (var y = 0; y < numElements; y++){
			
	// 		stroke(255)
	// 		strokeWeight(second()/3)
	// 		fill(x*colorStep, y*colorStep,200)
	// 		rect(x*step,y*step,step,step)
	// 		// fill(0)
		
	// 			// var string = x + "," + y
	// 			// text(string,x*step+25,y*step+25)
	// 	}
	// }

