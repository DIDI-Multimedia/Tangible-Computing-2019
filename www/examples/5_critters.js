console.log('5_critters.js')

// Week Five - for MuW201 Tangible Computing, 2019
// Sayje Patel 
// DJCLDS
// Date 


let creatures =[]

function setup(){

	let names = ['ayesha','noor','bella','mona','rafif','nikhilesh','hoor','ahsan']
	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('myContainer');
	initialize(names)
	console.log(JSON.stringify())

}

function draw(){

	background(255)
	
	for (var i = 0; i< creatures.length; i++){
		// console.log('draw')
		let creature = creatures[i]
		move(creature)
		creature.drawFace()
		// display(creature)

	}

}

function initialize(names){

	// define our creatures
	for (var i =0; i < names.length;i++){

		creature = {}
		creature.name = names[i]
		creature.posX = random(width/2)+width/4
		creature.posY = random(height/2)+height/4
		creature.rot = random(TWO_PI)
		creature.color = [random(255),random(255),random(255)]
		creature.size = names[i].length*5
		creature.drawFace = sayjelFace 
		creatures.push(creature)


	}

	return creatures 

}

function move(crtr){

	crtr.posX += random(-2,2)
	crtr.posY += random(-2,2)
	crtr.rot +=random(-.1,.1)
}

// function display(crtr){

// 	push()
// 	translate(crtr.posX,crtr.posY)
// 	rotate(crtr.rotate)
// 	fill(crtr.color)

// 	noFill()
// 	stroke(crtr.color)
// 	ellipse(0,0,crtr.size,crtr.size)
// 	pop()
// 	// ellipse(crtr.posX,crtr.posY,crtr.size,crtr.size)

// }



function sayjelFace(){

	push()

	translate(this.posX,this.posY)
	rotate(this.rot)

	textSize(this.size)
	fill(this.color)

	text(this.name,0,-this.size/2)
	ellipse(0,0,this.size,this.size)

	fill(0)
	ellipse(0,0,this.size/4,this.size/4)
	ellipse(5,-5,this.size/8,this.size/8)
	ellipse(-5,-5,this.size/8,this.size/8)
	line(-5,5,5,5)
	pop()

}