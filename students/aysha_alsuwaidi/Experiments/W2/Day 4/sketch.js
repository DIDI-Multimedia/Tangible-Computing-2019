var rectsize = 5
var a = 3
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){



stroke(0.4,random(255),random(255),random(255))
strokeWeight(70)
rect(mouseX/2,mouseY/2,24,2)


  if (mouseIsPressed){
    background(255)
  }

}