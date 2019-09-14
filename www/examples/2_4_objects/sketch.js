// Week Two, Day Four - for MuW201 Tangible Computing, 2019
// Sayje Patel 
// DJCLDS
// Date 

console.log('sketch.js')

let creatures =[]
let names = ['ayesha','noor','shamma','bella','mona','rafif','nikhilesh','hoor','ahsan']

function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
	initialize()

}

function draw(){

	background(255)
	
	for (var i = 0; i< creatures.length; i++){
		// console.log('draw')
		let creature = creatures[i]
		move(creature)
		display(creature)

	}

}

function initialize(){

	// define our creatures
	for (var i =0; i < names.length;i++){

		creature = {}
		creature.name = names[i]
		creature.posX = random(width)
		creature.posY = random(height)
		creature.color = [random(255),random(255),random(255)]
		creature.size = names[i].length*5

		// push name to creature array

		creatures.push(creature)

	}
	console.log(creatures)

}

function move(crtr){

	crtr.posX += random(-2,2)
	crtr.posY += random(-2,2)

}

function display(crtr){

	fill(crtr.color)
	textSize(crtr.size)
	text(crtr.name,crtr.posX,crtr.posY)
	// ellipse(crtr.posX,crtr.posY,crtr.size,crtr.size)

}
