let con = [];
var rectsize = 100



function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  background(255)

  for (let i = 0; i < 10; i++) {
    con.push(new Jitter());
  }
}

function draw() {

   for (let i = 5; i < con.length; i++) {
  con[i].move();
  con[i].display();
    }
  }



class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);
    this.speed = 3;
  }

  move() {
    this.x += random(-this.speed, +this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/con){
      push()
    translate(50,-50)
    rotate(angle)
    fill(random(255),random(255),random(255))
    noStroke()
    ellipse(this.x, this.y, this.diameter, this.diameter);
    rect(this.y, this.x, this.diameter, this.diameter);
      pop()
    } 
  }}