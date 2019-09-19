// function setup(){

// 	let canvas = createCanvas(windowWidth/3,windowWidth/3)
// 	strokeWeight(20)

// 	canvas.parent('sketch-holder');
// }
	
// function draw(){
// background(255)
//  if (mouseIsPressed) {
 	

//     stroke(random(255),random(255),random(255));
//     rect(random(0,width),random(0,height),mouseX,mouseY);
//     ellipse(random(0,width),random(0,height),mouseX,mouseY);
//     stroke(0);

// 	line(random(0,width),random(0,height),mouseX,mouseY);


//   } else {
//     stroke(0);
//   }
//   line(mouseX - 1, mouseY, mouseX + 1, mouseY);


// }

function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


}

function draw()
{

  let flower01 =createFlower()
  let flower02 =createFlower()
  drawFlower (flower01)
  push()
  scale(0.4)
  translate(width/2,height/2)
  
  drawFlower(flower02)
  scale(0.4)
  translate(width/2,height/4)
  pop()
}





function drawFlower (flower){



    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/flower.numPetals){
      console.log(angle)

      push()
      translate(flower.positionX,flower.positionY)
      rotate(angle)
       fill(random(255),random(255),random(255))
      ellipse(2,flower.outerRadius,(flower.outerRadius+flower.innerRadius)/4,flower.outerRadius-flower.innerRadius)
      fill(random(255),random(255),random(255))
      ellipse(0,flower.innerRadius,(flower.innerRadius+flower.outerRadius)/5,flower.outerRadius+flower.innerRadius)
      pop()
    }

    fill(255)
    ellipse(flower.positionX,flower.positionY,flower.innerRadius,flower.innerRadius)
}

function createFlower () {
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

  return flower



}













