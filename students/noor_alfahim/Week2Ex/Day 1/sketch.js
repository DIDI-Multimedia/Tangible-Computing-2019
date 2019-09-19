// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	createCanvas(800,800)
	background(255)
	
}

function draw(){

var innerRadius = 100
var outerRadius = 200
var rotation = 30
var speed = 1
var scale = 1
var color1 = 100
var color2 = 180
var posX = 400
var posY = 400 
var size = random(30,50)
var numPetals = 20


	drawFlower (posX, posY, numPetals, innerRadius, outerRadius, color1, color2, rotation, speed, scale)


}

function drawFlower(posX, posY, numPetals, innerRadius, outerRadius, color1, color2, rotation, speed, scale){

	fill(color1)

	for(var angle =0; angle< TWO_PI; angle += TWO_PI/numPetals){

		console.log(angle)

		push()
		translate(posX,posY)
		rotate(angle)
		ellipse(0,innerRadius,(outerRadius-innerRadius)/2,outerRadius-innerRadius)
		pop()

}


fill(color2)
ellipse(posX, posY, innerRadius, innerRadius)

}


