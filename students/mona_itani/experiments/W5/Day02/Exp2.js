let capture;
var rectsize = 10
var a = 80
function setup() {
let canvas = createCanvas(windowWidth/2, windowWidth/2)
  canvas.parent('sketch-holder');
  background(255)
     createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);

}

function draw(){

    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
       background(255);
  image(capture, 0, 0, 670, 900);
      filter(invert);
      translate(width/2,height/2)
      rotate(angle)
       stroke(0)
       strokeWeight(1)
    circle(0,0,0,10)
      
      pop()
    }

}

