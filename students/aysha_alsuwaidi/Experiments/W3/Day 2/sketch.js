
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {
  background(255)
  translate(width/2,height/2);
  stroke(random(255),random(255),random(255))
  strokeWeight(20);
  line(100,100,5*2,10*3);
}
