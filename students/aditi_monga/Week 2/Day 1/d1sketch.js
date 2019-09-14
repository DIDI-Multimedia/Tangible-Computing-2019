// Sketch Title - for MuW201 Tangible Computing, 2019
// Aditi Monga
// GitHub Username: aditimonga
// 9th September 

function setup(){

	let canvas = createCanvas(windowWidth/4,windowWidth/4)
	
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	background(random(255),155,215)
	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)
	// x++
	// text(x,x*step,height/2)

}


function draw(){
	var numElements = 10
	textSize(10)
	var step = width/numElements
	var colourStep = 255/numElements
	textAlign(CENTER,CENTER)
	// console.log(step)

	for (var x = 0 ; x < numElements; x++){
		for (var y = 0 ; y < numElements; y++){
			
			stroke(255)
			strokeWeight(second()/2)
			// noStroke()
			fill(mouseX,y*colourStep,50)
			ellipse(x*step,y*step,step,step)
			// fill(0)
// 		var string = x + "," + y
// 		text(string,x*step+25,y*step+25)
}
}
}
// 	// background(mouseX,mouseY,215)




// 	// var x = 0
	
	
// 		// fill(random(255), random(255), random(255))
// 		// ellipse(mouseX,mouseY/2,step/2,step/2)
// }
// }
// }