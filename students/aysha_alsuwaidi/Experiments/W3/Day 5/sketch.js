var rectsize = 5
var a = 3
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

}

function draw(){

    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
      translate(width/2,height/2)
      rotate(angle)
       stroke(random(255),random(255),random(255))
       strokeWeight(20)
      line(2,20,mouseX,mouseY)
      stroke(random(255),random(255),random(255))
      line(0,2,(2+a)/2,a+20)
      pop()
    }

}



