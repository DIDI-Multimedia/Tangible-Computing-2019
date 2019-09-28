// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
let rad = 60;
let xpos, ypos;

let xspeed = 3;
let yspeed = 2.2;

let xdirection = 3;
let ydirection = 1; 

function setup(){

  createCanvas(720,400);
  // background(255)
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  xpos = width / 4;
  ypos = height / 2;

}

  
function draw(){
  background(255);

    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;

    if (xpos > width - rad || xpos < rad) {
      xdirection *= -1;
    }
    if (ypos > height - rad || ypos < rad) {
      ydirection *= -1; 
    }

    rect(xpos, ypos, rad, rad);
    fill(random(255),random(255),random(255))

    ellipse(xpos, ypos, rad, rad);
    fill(random(255),random(255),random(255))


    if (mouseIsPressed){
    fill(255)
      ellipse(xpos, ypos, rad, rad);

    
    }

  }

  // help from: https://p5js.org/examples/motion-bounce.html
    