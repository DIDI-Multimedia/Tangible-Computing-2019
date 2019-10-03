// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

let flower01
let flower02 
let flowers  = [] // creates an empty array
let numFlowers = 50 

function setup(){

	createCanvas(1000,1000);
	background(255)

	for (var i = 0; i < numFlowers; i ++){
		
		let flo = createFlower()
		flowers.push(flo)

	}
	


}

function draw(){
	background(255)

	for(var i = 0; i < numFlowers; i ++){

		let flo = flowers[i]
		push()
		drawFlower(flo)
		pop()
	}

   

}


	
function createFlower(){

	let flower = {}
	flower.posX = random(width)
	flower.posY = random(height) 
	flower.numPetals = random(1,10)*2
	flower.innerRadius = width/16
	flower.outerRadius = width/8
	flower.color1 = [100,150,200]
	flower.color2 = [200,150,100]
	flower.rotation = random(0,TWO_PI)
	flower.speed = random(0.05,0.1)
	flower.scale = 1
	
	return flower


}

function drawFlower(flower){

	fill(flower.color1)
	flower.rotation += flower.speed

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















