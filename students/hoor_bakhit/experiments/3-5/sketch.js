let flys = []; // array of Jitter objects

function setup() {
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
  
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(0)

  // Create objects
  for (let i = 0; i < 50; i++) {
    flys.push(new shiver());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < flys.length; i++) {
    flys[i].move();
    flys[i].display();
  }
}

// Jitter class
class shiver {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 70);
    this.speed = 20;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    rect(this.x, this.y, this.diameter, this.diameter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}