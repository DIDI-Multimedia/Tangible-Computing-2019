function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw()
{
  
    var numPetals = 10
  var innerRadius =50
  var outerRadius =mouseX
  var rotation = PI/4
  var scale =mouseX
  var color1  
  var color2 
  var positionX =width/2
  var positionY =height/2
  var speed = 2
  drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY)
}





function drawFlower (numPetals,innerRadius,outerRadius,rotation,scale,color1,color2,positionX,positionY,speed){

   
   //ellipse(positionX,positionY-innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)
 //fill(random(255),random(255),random(255))
   //ellipse(positionX,positionY+innerRadius, (outerRadius-innerRadius)/2, outerRadius-innerRadius)

for (var angle = 0; angle < TWO_PI; angle+= TWO_PI/numPetals){
  console.log(angle)
  push()
  translate(positionX,positionY)
  rotate(angle)
   fill(random(255),random(255),random(255))
  ellipse(10,innerRadius,(outerRadius+innerRadius)/4,outerRadius+innerRadius)
  fill(252,102,0,200)

  ellipse(0,innerRadius,(outerRadius+innerRadius)/4,outerRadius+innerRadius)
  

  
  fill(random(255),random(255),random(255))
   ellipse(13,innerRadius,(outerRadius-innerRadius)/2,outerRadius-innerRadius)

 

  pop()
}

    fill(255)
    ellipse(positionX,positionY,innerRadius,innerRadius)
}

