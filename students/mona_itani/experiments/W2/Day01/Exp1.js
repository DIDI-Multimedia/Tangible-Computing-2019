var rectsize = 10
var a = 80
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
     rect(100,20,50,10,100)
      ellipse(9,100,mouseX,mouseY)
      
      
      pop()
    }

}





