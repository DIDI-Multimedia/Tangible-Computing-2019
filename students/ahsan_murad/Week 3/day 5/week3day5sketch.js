//adding rectangles
function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw()
{
  
  var numPetals = 150
  var innerRadius =50
  var outerRadius = 100
  var rotation = PI/2
  var scale =12
  var color1  
  var color2 
  var positionX =width/2
  var positionY =height/2
  var speed = 0.1
  drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY)
}



function drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY,speed){

    fill(141,2,31)
    //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
    //fill(random(255),random(255),random(255))
    //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI; angle+= TWO_PI/numPetals){
  console.log(angle)
  push()
  translate(positionX,positionY)
  rotate(angle)
  ellipse(0,innerRadius,(outerRadius-innerRadius)/2,outerRadius-innerRadius)
  fill(random(155),0,0)
  ellipse(0,innerRadius,(outerRadius-innerRadius)/6,outerRadius+innerRadius)
  //fill(random(150),random(150),random(200))
  rect(50,innerRadius,(outerRadius-innerRadius)/10,outerRadius*innerRadius)
  ellipse(0,innerRadius,(outerRadius/innerRadius)/10,outerRadius+innerRadius)
  pop()
}

    fill(random(10,155,0),0,0,200)
    ellipse(positionX,positionY,innerRadius,innerRadius)
}