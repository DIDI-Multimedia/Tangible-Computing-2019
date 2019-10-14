class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 10;
    this.yDir = 10;
  }

 
  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 1) {
      this.xDir *= -2;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
  }


  draw() {
    fill(237,34,93);
    rect(this.xOff + this.x, this.yOff + this.y, 6, 6);
     rect(this.xOff + this.x, this.yOff + this.y, 10, 20);
  }
}

let unit = 10;
let count;
let mods = [];

function setup() {
  createCanvas(720, 360);
  noStroke();
  let wideCount = width / unit;
  let highCount = height / unit;
  count = wideCount * highCount;

  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
        random(0.01, 0.8),
        unit
      );
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
}
// source: https://p5js.org/examples/arrays-objects.html