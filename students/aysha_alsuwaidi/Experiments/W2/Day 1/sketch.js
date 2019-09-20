

function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw()
{

 let flower={}
  flower.numPetals = 10
  flower.innerRadius =50
  flower.outerRadius =100
  flower.rotation = PI/4
  flower.scale =12
  flower.color1  
  flower.color2 
  flower.positionX =0
  flower.positionY =0
  flower.speed = 2

 drawFlower(flower)
}
 


function drawFlower (flower){



    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/flower.numPetals){
      console.log(angle)

      push()
      translate(width/2,height/2)
      rotate(angle)
       fill(random(255),random(255),random(255))
      ellipse(2,flower.outerRadius,(flower.outerRadius+flower.innerRadius)/4,flower.outerRadius-flower.innerRadius)
      fill(random(255),random(255),random(255))
      ellipse(0,flower.innerRadius,(flower.innerRadius+flower.outerRadius)/2,flower.outerRadius+flower.innerRadius)
      pop()
    }

    translate(width/2,height/2)
    fill(255)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}
