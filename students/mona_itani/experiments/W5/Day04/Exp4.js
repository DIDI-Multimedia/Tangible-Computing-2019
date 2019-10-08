let distances = [];
let maxDistance;
let spacer;

function setup() {
  createCanvas(720, 360);
  maxDistance = dist(width / 10, height / 10, width, height);
  for (let x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (let y = 0; y < height; y++) {
      let distance = dist(width / 2, height / 2, x, y);
      distances[x][y] = (distance / maxDistance) * 255;
    }
  }
  spacer = 10;
  noLoop(); 
}

function draw() {
  background(0);
 
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
    circle(x/9 + spacer /10, y + spacer /10,3,4);
     circle(x/8 + spacer /9, y + spacer /10,3,4);
      circle(x/7 + spacer /8, y + spacer /10,3,4);
      circle(x/6 + spacer /7, y + spacer /10,3,4);
     circle(x/5 + spacer /6, y + spacer /10,3,4);
      circle(x/4 + spacer /8, y + spacer /10,3,4);
      circle(x/3 + spacer /9, y + spacer /10,3,4);
      circle(x/2 + spacer /8, y + spacer /10,3,4);
      circle(x/1 + spacer /7, y + spacer /10,3,4);
     circle(x/0.9 + spacer /6, y + spacer /10,3,4);
      circle(x/0.8 + spacer /8, y + spacer /10,3,4);
    }
  }
}
