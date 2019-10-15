let bubbles = [];

function setup() {
  createCanvas(600, 400);
  // bubbles[0] = new Bubble(200, 200, 40);
  // bubbles[1] = new Bubble(400, 200, 20);
}

function mouseDragged() {
  stroke(255);
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  // for (let bubble of bubbles) {
    // bubbles[i].move();
    // bubbles[i].show();
  }

  // for (let i = 0; i < bubbles.length; i++){
  //   bubbles[i].move();
  //   bubbles[i].show();
  // }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

// source: https://www.youtube.com/watch?v=Y8sMnRQYr3c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=30
