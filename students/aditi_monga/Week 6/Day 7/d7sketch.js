var angle = 0;
var mic;

function setup(){
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');

   angleMode(DEGREES)

  mic = new p5.AudioIn()
  mic.start()

}

function draw(){
  background(0)

  var vol = mic.getLevel();

  push()
  translate(width/2,width/2)
  rotate(angle)
  stroke(255)
  line(0,0,0,-300)
  pop()
  // console.log (vol)

  if (vol>0.3) {
    angle = angle + 0.5
  } else {

    angle = angle
  }
  

  fill(255)
  textSize(50)
  text(angle, 20, 50)

}