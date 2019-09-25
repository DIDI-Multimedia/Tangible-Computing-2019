// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

	createCanvas(1000,1000);
	background(255)

	let flower01 = createFlower()
	let flower02 = createFlower()
	drawFlower (flower01)
	push()
	translate(width/2,height/2)
	drawFlower (flower02)
	pop()


}
	
function createFlower(){

	let flower = {}
	flower.posX = 300
	flower.posY = 300 
	flower.numPetals = 20
	flower.innerRadius = 100
	flower.outerRadius = 200
	flower.color1 = [100,150,200]
	flower.color2 = [200,150,100]
	flower.rotation = 30
	flower.speed = 1
	flower.scale = 1
	
	return flower


}

function drawFlower(flower){

	fill(flower.color1)

	for(var angle = 0; angle < TWO_PI; angle += TWO_PI/flower.numPetals){

		console.log(angle)

		push()
		translate(flower.posX,flower.posY)
		rotate(angle)
		ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
		pop()

	}


fill(flower.color2)
ellipse(flower.posX, flower.posY, flower.innerRadius, flower.innerRadius)

}


