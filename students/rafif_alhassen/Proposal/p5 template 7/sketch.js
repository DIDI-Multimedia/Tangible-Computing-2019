// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 

function setup(){

  createCanvas(800,800);
  background(255)
  let flower = createFlower()
  push()
  translate(width/2,height/2)
  drawFlower(flower)
  pop()


}

function createFlower(){
  
  let flower = {}
  flower.numPetals = 500
  flower.innerRadius = 40
  flower.outerRadius = 40
  flower.rotation = PI/4
  flower.scale = 8
  flower.color1  = [151,177,255]
  flower.color2 = [123,36,222]
  flower.posX = width/2
  flower.posY = height/2
  flower.speed = 2
  // drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY)

  return flower

}





function drawFlower (flower){

    fill(flower.color1)
    //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
    //fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI*4; angle+= TWO_PI/flower.numPetals){

  console.log(angle)

  push()

  translate(flower.positionX,flower.positionY)
  rotate(angle)

  ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
  fill(random(255),random(255),random(255))
  ellipse(0,flower.innerRadius,(flower.outerRadius/flower.innerRadius)/4,flower.outerRadius+flower.innerRadius)
  fill(random(255),random(255),random(255))
  ellipse(0,flower.innerRadius++,(flower.outerRadius/flower.innerRadius)/4,flower.outerRadius+flower.innerRadius)

  pop()
}

    fill(0)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}


// function draw(){

// 	background(0)
// 	var numElements = 15
// 	textSize(10)
// 	var step = width/numElements
// 	var colorStep = 255/numElements
// 	textAlign(CENTER,CENTER)

// for (var x = 0 ; x < numElements; x++){

// 	for(var y = 0; y < numElements; y++){

// 		stroke(255)
// 		strokeWeight(second()/5)
// 		fill(x*colorStep,y*colorStep,200)

// 		rect(x*step,y*step,step,step)
// 		circle(x*step+2,y*step+2,step,step)


// 		}

// 	}
// }


