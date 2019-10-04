var rectsize = 1
var a = 9
function setup() {
let canvas = createCanvas(windowWidth/2, windowWidth/2)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
      translate(width/2,height/2)
      rotate(angle)
       stroke(0)
       strokeWeight(1)
    circle(9,0,mouseX,mouseY)
          rect(10,0,mouseX,mouseY)
      
      
      pop()
    }

}
