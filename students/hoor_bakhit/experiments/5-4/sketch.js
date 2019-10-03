// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
 
let ball;

function setup() {
  createCanvas(500,500);
  ball = new Ball();
  background(205, 208, 234);
}

function draw() {
  ball.walk();
  ball.display();
}

class Ball{
  constructor(){
    this.position = createVector(width/4,height/4);
    this.noff = createVector(random(1000),random(1000));
  }

 display() {
    strokeWeight(2);
    fill(16, 63, 75);
    stroke(55, 119, 135);
    ellipse(this.position.x, this.position.y, 60, 60);
  }

  walk() {
    this.position.x = map(noise(this.noff.x),0,1,0,width);
    this.position.y = map(noise(this.noff.y),0,1,0,height);
    this.noff.add(0.01,0.01,0);
  }
}



