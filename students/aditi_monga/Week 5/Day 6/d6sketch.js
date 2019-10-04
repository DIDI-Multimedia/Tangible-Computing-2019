
var mic;


function setup(){
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');
	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  var vol = mic.getLevel();
  	background(0)
    ellipseMode(CENTER)
  noStroke()
  fill (227,107,38)
    ellipse(width/2, width/2, vol*300, height+500)
    fill (38,107,227)
    ellipse(width/2, width/2, width+500, vol*300)
}