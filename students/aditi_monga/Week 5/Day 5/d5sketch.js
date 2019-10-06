//var angle = 180
var mic;


function setup(){
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');
  // canvas.parent('sketch-holder');
    // angleMode(DEGREES) 
  mic = new p5.AudioIn()
  mic.start()
}

function draw(){
    background(0)
  rectMode(CENTER)
  var vol = mic.getLevel();
  fill(vol*1000,vol*300,vol*300)
  for (x = 0; x <= width; x+=50){
      rect (x, height, 50, vol*random(9000))
  }

  for (y = 0; y <= width; y+=50){
      rect (y, 0, 50, vol*random(9000))
  }
}