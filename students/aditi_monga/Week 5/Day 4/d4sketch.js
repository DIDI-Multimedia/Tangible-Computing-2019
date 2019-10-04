var mic;


function setup(){
let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(100)
	var vol = mic.getLevel();
	
    for (var x = 100*vol; x <= width; x+=100){
      for (var y = 100*vol; y <=height; y+=100){
        // fill(x*vol, y*random(200), vol*random(255))
        strokeWeight(10)
        stroke(vol*255)
        rectMode(CENTER)
        rect (x, y, vol*100,vol*100)
      } 
    }
}