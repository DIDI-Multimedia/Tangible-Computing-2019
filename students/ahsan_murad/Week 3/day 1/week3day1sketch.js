function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw()
{
  
  var numPetals = mouseY
  var innerRadius =50
  var outerRadius = mouseX
  var rotation = PI/4
  var scale =12
  var color1  
  var color2 
  var positionX =width/2
  var positionY =height/2
  var speed = 2
  drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY)
}



function drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY,speed){

    fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
    //fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI; angle+= TWO_PI/numPetals){
  console.log(angle)
  push()
  translate(positionX,positionY)
  rotate(angle)
  ellipse(0,innerRadius,(outerRadius-innerRadius)/2,outerRadius-innerRadius)
  fill(random(255),random(255),random(255))
  ellipse(0,innerRadius,(outerRadius+innerRadius)/11,outerRadius+innerRadius)
  fill(random(150),random(150),random(200))
  ellipse(5,innerRadius,(outerRadius/innerRadius)/1,outerRadius-innerRadius)
  pop()
}

    fill(252,102,0,200)
    ellipse(positionX,positionY,innerRadius,innerRadius)
}