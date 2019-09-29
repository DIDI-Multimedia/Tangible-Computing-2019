var ellipse1;
var ellipse2;
var ellipse3;



function setup() {
  let canvas = createCanvas(windowWidth/2,windowWidth/2)
  
  
  
  canvas.parent('sketch-holder');
  background(210,185,211)

  
  ellipse1 = new Ellipse();
  ellipse2 = new Ellipse();
  ellipse3 = new Ellipse();
 
}

function draw() {
  
    ellipse1.grow();
    ellipse1.display();
    ellipse2.grow();
    ellipse2.display();
    ellipse3.grow();
    ellipse3.display();
  }  


function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function Ellipse() {
  this.x = random(400) + 1;
  this.y = random(400) + 1;
  this.dimension = +1;

  this.grow = function() {
    this.dimension++;
  }

  this.display = function() {
    fill(random(255),155,215);
    stroke(255);
    strokeWeight(10)
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.dimension, this.dimension);

    
  };
}

function mousePressed() {
  s1.dimension = 1;
  redraw();
}