
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
  //capture.hide();
}



function draw(){

    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/rectsize){
      console.log(angle)

      push()
      translate(width/2,height/2)
       background(255);
  image(capture, 0, 0, 320, 240);
  filter(INVERT);
      rotate(angle)
       stroke(0)
       strokeWeight(1)
     rect(100,20,50,10,100)
      ellipse(9,100,mouseX,mouseY)
      
      
      pop()
    }

}






