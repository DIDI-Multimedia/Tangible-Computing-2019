let coswave = [];

function setup() {
  createCanvas(720, 360);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(0);
  noLoop();
}

function draw() {
  let y1 = 0;
  let y2 = height / 3;
  for (let i = 0; i < width; i += 4) {
    stroke(coswave[i] * 255);
    line(i, y1+2, i, y2*4);
  }

  y1 = y2;
  y2 = y1 - y1;
  for (let i = 0; i < width; i += 3) {
    stroke((coswave[i] * 86) /6);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = height;
  for (let i = 0; i < width; i += 7) {
    stroke((random(255),random(255),random(255)) - coswave[i] * 255);
    line(i, y1, i, y2);
  }
}

// source: https://p5js.org/examples/arrays-array.html