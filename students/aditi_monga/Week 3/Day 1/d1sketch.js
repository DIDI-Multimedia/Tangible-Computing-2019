	var a = 0
	var aMinus = -1

function setup(){

	let canvas = createCanvas(1400,800)
	canvas.parent('sketch-holder');
}

function draw(){
	background(255)
	let pistilX = width/4
	let pistilY = height/4
	let numPetals = 10
	let innerRadius = width/32
	let outerRadius = width/16
	let t = sin(a)
	let color1 = [0,150*t,a]
	let color2 = [155*t,0,30]
	let rotation = PI/4
	let speed = 1
	let scale = 1
	drawFlower(pistilX,pistilY,numPetals,innerRadius,outerRadius,color1,color2,rotation,speed,scale)
	a+= 0.05

}

function drawFlower(pistilX,pistilY,numPetals,innerRadius,outerRadius,color1,color2,rotation,speed,scale){
	
	for (var pistilX = 0; pistilX < width; pistilX+= windowWidth/6) {
		for (var pistilY = 0; pistilY < width; pistilY+= windowWidth/6){

		}
	

	strokeWeight(4)
	stroke(255)
	push()

	translate(pistilX,pistilY/8)
	for(var angle=0; angle < TWO_PI; angle += TWO_PI/numPetals){
		console.log(angle)
		push()
	rotate(angle)
	fill(color2)
	ellipse(0,outerRadius,outerRadius,outerRadius*3) //petal
	pop()
	
	}


	fill(color1)
	ellipse(0,0,outerRadius,outerRadius) //outerpistil
	fill(color2)
	ellipse(0,0,innerRadius,innerRadius) //innerpistil
	pop()
}

}