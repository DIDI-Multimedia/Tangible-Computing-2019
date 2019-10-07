/*

Gradient Array

*/


function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn(0);
  mic.start();
}

function draw() {
  background(100,200,50);
  var vol = mic.getLevel();
  fill(255);
  noStroke()
  ellipse(200,200,200,vol * 1000);
  fill(0,0,255);
  stroke(50);
  ellipse(200,200,100,vol * 1000);

  console.log(vol);
}