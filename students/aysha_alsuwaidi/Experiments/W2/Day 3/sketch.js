var speed = 5
var a = 2
var positionX=2

function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

stroke(a+200,random(255),random(255),random(255))
strokeWeight(7)
line(mouseX/2,mouseY/2,24,2)

  if (positionX > windowWidth/2) {
    speed = 0.5
  }

  positionX = - speed

  if (a >= 255) {
    a = 0
  }
  if (mouseIsPressed)
    background(255)
}
