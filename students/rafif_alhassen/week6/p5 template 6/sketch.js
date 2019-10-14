let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  stroke(0)
  background(0);
}

function draw() {
  // background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  fill(random(255),random(255),random(255));
  stroke(random(255),random(255),random(255));
  rectMode(CENTER);
  point(x, y, 20, 20);  
  point(y, x, 50, 50);

  

  // if (mouseIsPressed) {
  //   fill(255, 150);
  //   noStroke();
  //   ellipse(mouseX, mouseY, 60, 60);
  }


// source: https://www.youtube.com/watch?v=TaluaAD9MKA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s