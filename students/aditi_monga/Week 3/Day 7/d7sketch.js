var x = 1

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(0);
  noStroke();
  for (let i = 0; i < width; i += 20) {
    fill(10, 100, 255);
    ellipse(0, i, x++, 10);
    fill(255);
    ellipse(i, 0, x++, height);
  }

  if(x >= width)
    x = 0
}

//from https://p5js.org/examples/structure-width-and-height.html