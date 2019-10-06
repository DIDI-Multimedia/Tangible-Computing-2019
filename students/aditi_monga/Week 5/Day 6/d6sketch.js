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
  stroke(255)
  strokeWeight(3)
  var vol = mic.getLevel();
  fill(vol*300,vol*1000,vol*300)
  for (x = 0; x <= width; x+=20){
      rect (x, height, 20, vol*random(5000))
  }

  for (y = 0; y <= width; y+=20){
      rect (y, 0, 20, vol*random(5000))
  }

    for (i = 0; i <= width; i+=20){
      rect (0, i, vol*random(5000),20)
  }

   for (j = 0; j <= width; j+=20){
      rect (height, j, vol*random(5000),20)
  }
}
