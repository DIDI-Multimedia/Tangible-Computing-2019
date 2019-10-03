var mic;
var x = 50
var y = 50


function setup(){
let canvas = createCanvas(windowWidth/2,windowWidth/2)
    canvas.parent('sketch-holder');

	mic = new p5.AudioIn()
	mic.start()
}

function draw(){
  	background(0)
	var vol = mic.getLevel();
	
    for (var x = 50; x <= width; x+=100){
      for (var y = 50; y <=height; y+=100){
        fill(x*vol, y*random(200), vol*random(255))
        ellipse (x, y, vol*100,vol*100)
      } 
    }
}