var speed = 10
var a = 90
var positionX= 30

function setup() {
let canvas = createCanvas(windowWidth/2, windowWidth/2)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

stroke(a,0)
strokeWeight(1)
ellipse(5,7,mouseX,mouseY)


  if (positionY = windowWidth) {
    speed = 0
  }

  positionX = speed

  if (a >= 100) {
    a = 6
  }
  if (mouseIsPressed)
    background(random(255),random(255),random(255))
}


