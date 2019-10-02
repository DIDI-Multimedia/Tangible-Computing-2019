// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 


let flower01
let flower02 

function setup(){

	createCanvas(1000,1000);
	background(255)

	flower01 = createFlower()
	flower02 = createFlower()
	// drawFlower (flower01)
	


}

function draw(){
	background(255)
	push()
	translate(width/4,height/2)
	drawFlower(flower01)
	pop()

    push()
	translate(width*0.75,height/2)
	rotate(0.5)
	drawFlower(flower02)
	pop()

}


	
function createFlower(){

	let flower = {}
	flower.posX = 0
	flower.posY = 0 
	flower.numPetals = 20
	flower.innerRadius = width/16
	flower.outerRadius = width/8
	flower.color1 = [100,150,200]
	flower.color2 = [200,150,100]
	flower.rotation = random(0,TWO_PI)
	flower.speed = 
	flower.scale = 1
	
	return flower


}

function drawFlower(flower){

	fill(flower.color1)
	flower.rotation += 0.1

	push()
		translate(flower.posX,flower.posY)
		rotate(flower.rotation)


	for(var angle = 0; angle < TWO_PI; angle += TWO_PI/flower.numPetals){

		// console.log(angle)

		push()

		rotate(angle)
		ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
		pop()

	}

	pop()

fill(flower.color2)
ellipse(flower.posX, flower.posY, flower.innerRadius, flower.innerRadius)

}















