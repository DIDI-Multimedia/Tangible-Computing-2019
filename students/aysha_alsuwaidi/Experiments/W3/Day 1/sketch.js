var mic;
function setup(){

  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(255)

 var vol= mic.getLevel();

  strokeWeight(20)
  stroke(random(255),random(255),random(255));
  line(0,0, vol*1000,vol*1000);
  console.log(vol)
}