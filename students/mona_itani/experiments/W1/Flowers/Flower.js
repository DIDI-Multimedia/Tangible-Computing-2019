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
  let flower={}
  flower.posX = width/2
  flower.posY = height/2
  flower.numPetals = 10
  flower.innerRadius= width/16
  flower.outerRadius= width/8
  flower.color1 = [255,0,0]
  flower.color2 = [0,255,0]
  flower.speed = 1
  flower.scale = 1

  return flower

   // var numPetals = 10
  }
  //var innerRadius =50
 // var outerRadius =100
  //var rotation = PI/4
 // var scale =12
 // var color1  
 // var color2 
  //var positionX =width/2
 // var positionY =height/2
 // var speed = 2
 // drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY)






function drawFlower (flower){

    fill(flower.color1)
    //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
    //fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI*2; angle+= TWO_PI/flower.numPetals){
  console.log(angle)
  push()
  translate(flower.posX, flower.posY)
  rotate(angle)
  ellipse(0,flower.innerRadius,(flower.outerRadius-flower.innerRadius),flower.outerRadius-flower.innerRadius)
  fill(random(255),random(255),random(255))
  ellipse(0,flower.innerRadius,(flower.outerRadius+flower.innerRadius),flower.outerRadius+flower.innerRadius)
  pop()
}

    fill(0)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}


  