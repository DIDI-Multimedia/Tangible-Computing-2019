var mic;

function setup(){
let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(0)
	var vol = mic.getLevel();
	noFill()
  background(255)

  for (var x = 10; x <= width; x+=40) {
    for (var y = 10; y <= height; y+=40)
      // stroke(x, y, random(255))
      // strokeWeight(4)
      ellipse (x, y, vol*400, vol*400)
  }

}