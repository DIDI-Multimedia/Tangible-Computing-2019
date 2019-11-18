let con = [];
var rectsize = 100
var radius = 0.01
var exploded = false 

function setup() {
let canvas = createCanvas(windowWidth, windowWidth/3)
  canvas.parent('sketch-holder');

  for (let i = 0; i < 500; i++) {
    con.push(new Jitter());
  }
}

function draw() {

  if (exploded == false){
    for (var angle=0.0001; angle < TWO_PI; angle+= TWO_PI/rectsize){
      // console.log(angle)

      push()
      translate(width/2,height/2)
      scale(radius)
      rotate(angle)
      noFill()
       stroke(400,random(110),random(168),random(5))
       strokeWeight(200)
      triangle(15,2,random(20,12,90),random(2,2,9))
      triangle(100,0,random(2,2,9),random(0,9))
     
      pop()
    }

  }
console.log('r:',radius)
    radius +=0.001;

    if (radius >1){
      exploded = true 
      console.log('EXPLODE')
    }

    if (exploded == true ){
       for (let i = 2; i < con.length; i++) {

          con[i].move();
          con[i].display();
      }  
    }

  
}


class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 20);
    this.speed = 4;
  }

  move() {
    this.x += random(-this.speed, +this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    for (var angle=0; angle < TWO_PI; angle+= TWO_PI/con){
      push()
    translate(windowWidth)
    rotate(angle)
    fill(random(255),random(255),random(255))
    noStroke()
    rect(this.y, this.x, this.diameter, this.diameter);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    

      pop()
    } 
  }}