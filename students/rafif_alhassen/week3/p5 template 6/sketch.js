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
  flower.numPetals = 20
  flower.innerRadius = 50
  flower.outerRadius = 100
  flower.rotation = PI/4
  flower.scale = 10
  flower.color1  = [123,36,222]
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

  line(236,flower.innerRadius*2,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
  fill(random(255),random(255),random(255))
  rect(236,flower.innerRadius+3,(flower.outerRadius/flower.innerRadius)/4,flower.outerRadius+flower.innerRadius)
  fill(random(255),random(255),random(255))
  rect(236,flower.innerRadius++,(flower.outerRadius/flower.innerRadius)/4,flower.outerRadius+flower.innerRadius)

  pop()
}

    fill(0)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}

    if (mouseIsPressed){
    line(+2,flower.innerRadius+1,(flower.outerRadius-flower.innerRadius)/2,flower.outerRadius-flower.innerRadius)
      
}