// var a = 30
// var b = 30

function setup(){

	let canvas = createCanvas(windowWidth/2,windowWidth/2)
	canvas.parent('sketch-holder');

}


function draw(){

	noFill()
	background(255)

	for (var x = 10; x <= width; x+=40) {
		for (var y = 10; y <= height; y+=40)

			// stroke(x, y, random(255))
			// strokeWeight(4)
			ellipse (x, y, mouseY/2, mouseX/2)
	}

	// if (a > 45) {
	// a = 30
	// }

	// if (b > 45) {
	// b = 30
	// }
}

	

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }
// 	for (var x = 10; x < width; x+=20) {
// 		for (var y = 10; y < height; y+=20) {
// 			for (var a = 10; a < 10; a+=3) {
// 				for (var b = 10; y < 10; b+=3) {

// 					noFill()
// 					strokeWeight(1)
// 					rect(x, y, a, b)

// 				}

// 			}

// 		}

// 	}

// }
