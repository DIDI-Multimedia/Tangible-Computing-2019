var a = 200
var b = 200

function setup(){

	let canvas = createCanvas(windowWidth,windowWidth/2)
	canvas.parent('sketch-holder');
	background(0)
}


function triRecursion(i){
	i--
	stroke(255)
	strokeWeight(1)
	fill(i, random(255))
	triangle (0,100, i*10, i*20, i*30, mouseX, mouseY)
	if (i > 0){
		triRecursion(i)
	}

}
function draw(){
	background(0)

	let i = 100
	triRecursion(i)

	// for (var i = 0; i < width; i++){
	// 	for (var j = 0; j < width; j++){
	// 		for (var = 0; k < height; k)
	// 	}
	// }
	// for (var i = 50; i <= width && i <= height ; i+=20) {
	// 	for (var j = 20; j <= width && i <= height ; j+=10) {
	// 		for (var k = 30; k <= width && i <= height ; k+=30){
	// 			triangle (0,100, i, k, j, mouseX, mouseY)
	// 		}
	// 	}
	// }
}