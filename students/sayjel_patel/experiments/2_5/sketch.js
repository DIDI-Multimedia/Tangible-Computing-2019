// Week Two, Day Four - for MuW201 Tangible Computing, 2019
// Sayje Patel 
// DJCLDS
// Date 

console.log('sketch.js')

let blocks =[]
let reset = true

function setup(){

	let canvas = createCanvas(windowWidth/3,windowWidth/3)
	canvas.parent('sketch-holder');
	blocks = initialize()
	fill(255,0,0)

}

function draw(){

	background(253,253,150)
	// ellipse(width/2,height/2,500,500)
	text(second(),50,50)
	
	for (var i = 0; i< blocks.length; i++){

		updateBlock(blocks[i])
		drawBlock(blocks[i])

	}

	if (second() == 59){
		if (reset){
		fill(random(255),random(255),random(255))
		blocks.forEach(block=>{
			block.tarX = random(width/2)
				block.tarY = random(0,height/8) // (height/60)*block.id
		
			// block.tarY = random(height/2,height) // (height/60)*block.id
			block.tarR = random(TWO_PI)
		})
		}
		reset = false
	}
	if (second() == 0 && !reset){
		reset = true
	}

}

function updateBlock(block){
	if (block.id == second()){
		block.tarX = width - width/4
		block.tarY = (height/60)*block.id
		block.tarR = 0
	}

	block.posX =lerp(block.posX, block.tarX, .025)
	block.posY =lerp(block.posY, block.tarY, .05)
	block.rot = lerp(block.rot,block.tarR,.02)
}

function drawBlock(block){

	push()
	let x =block.posX+(60-(60-block.id)/2)
	let y = height-block.posY
	translate(x,y)
	rotate(block.rot)
	rect(0,0,(60-block.id),block.size)
	pop()
	stroke(0)
	if (abs(block.rot)>0.01 ){
		line(width/60000*millis(),0,x,y)
	}



}

function initialize(){

	let arr = []

	for (var i =59; i > 0;i--){

		let block = {}
		block.id = i
		block.size = height/60
		block.posY = (height/60)*i
		block.posX = 0 
		block.tarX = width-width/4
		block.tarY =(height/60)*i
		block.rot = 0
		block.tarR = 0
		if (second()<block.id){
			block.tarX = random(width/2)
			block.tarY = random(0,height/8) // (height/60)*block.id
			block.tarR = random(TWO_PI)
		}

		arr.push(block)

	}

	return arr

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
