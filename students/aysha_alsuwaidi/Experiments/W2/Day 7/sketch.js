var rectsize = 100
var a = 32
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

    for (var angle=1; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
      translate(width/2,height/2)
      rotate(angle)
       stroke(random(255),random(255))
       strokeWeight(15)
      triangle(2,2,mouseX,mouseY)
      triangle(2,20,mouseX,mouseY)
      triangle(mouseX,mouseY,22,2)
      pop()
    }
}

  if (mouseIsPressed){
    background(255)
  }

