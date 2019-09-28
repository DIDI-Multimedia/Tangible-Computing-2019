function setup(){

  let canvas = createCanvas(windowWidth/2, windowWidth/2)
  canvas.parent('sketch-holder');


}

function draw()
{
  
  let flower = {}
  flower.numPetals = 10
  flower.innerRadius =50
  flower.outerRadius =100
  flower.rotation = PI/4
 flower.scale =12
  flower.color1  
  flower.color2 
  flower.positionX =width/2
 flower.positionY =height/2
  flower.speed = 2
  drawFlower (flower)
}





function drawFlower (flower){

    //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
 //fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI; angle+= TWO_PI/flower.numPetals){
  console.log(angle)

  push()
  translate(flower.positionX,flower.positionY)
  rotate(angle)
  fill(random(255),random(255),random(255))
  ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius+400)/2,flower.outerRadius-flower.innerRadius)
  fill(random(255),random(255),random(255))
  ellipse(0,flower.innerRadius,(flower.outerRadius+flower.innerRadius)/4,flower.outerRadius+flower.innerRadius)
  
  pop()
}

    fill(255)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}

