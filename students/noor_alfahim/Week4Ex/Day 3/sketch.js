/*

Gradient Array

*/


function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn(0);
  mic.start();
}

function draw() {
  background(220);
  var vol = mic.getLevel();
  
  ellipse(200,200,200,vol * 1000);
  console.log(vol);
}