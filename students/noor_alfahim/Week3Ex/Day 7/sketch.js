// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let flower01
let flower02 
let flowers  = [] // creates an empty array
// let numFlowers = 50 
let counter = 0

function setup(){

	createCanvas(1000,1000);
	background(255)
	addFlower()


}

function draw(){
	background(255)


	addFlower()


if (flowers=>50){
}



	for(var i = 0; i < flowers.length; i ++){

		let flo = flowers[i]
		push()
		drawFlower(flo)
		pop()
	}

   

}

function addFlower(){

		let flo = createFlower()
	flowers.push(flo)


}
function createFlower(){

	let flower = {}
	flower.posX = random(width)
	flower.posY = random(height) 
	flower.numPetals = random(1,10)*2
	flower.innerRadius = width/16
	flower.outerRadius = width/8
	flower.color1 = random (255)
	flower.color2 = random (100,255)
	flower.rotation = random(0,TWO_PI)
	flower.speed = random(0.1,0.3)
	flower.scale = 1
	
	return flower


}

function drawFlower(flower){

	fill(flower.color1)
	flower.rotation += flower.speed
	flower.color1 += flower.speed
	noStroke()

	if (flower.color1 > 255){

		flower.color1 = 0

	}
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
	for (var i = 0; i < 1; i += 0.05){

		fill(flower.color2,50,100,100)
		ellipse(flower.posX, flower.posY, flower.innerRadius*i, flower.innerRadius*i)	

	}


}