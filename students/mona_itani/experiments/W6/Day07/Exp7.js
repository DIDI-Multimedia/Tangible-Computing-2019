let coswave = [];

function setup() {
  createCanvas(240, 240);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 9, width, 10, PI*100);
    coswave[i] = abs(cos(amount));
  }
  background(0);
  noLoop();
}

function draw() {
  let y1 = 10;
  let y2 = height/2;
  for (let i = 0; i < width; i += 3) {
    stroke(coswave[i] * 255);
    rect(i, y1, i, y2/3);
     circle(i/2, y1/10, i/10, y2/3);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (let i = 1; i < width; i += 10) {
    stroke((coswave[i] * 255) / 10);
    rect(i*9, y1/10, i*10, y2*19);
     rect(i*10, y1/2, i*1, y2*10);
  }

  y1 = y2;
  y2 = height
  for (let i = 10; i < width; i += 10) {
    stroke(255 - coswave[i] * 255);
    circle(i, y1/2, i, y2/10);
    rect(i*10, y1/1, i*20, y2*1);
  }
}
