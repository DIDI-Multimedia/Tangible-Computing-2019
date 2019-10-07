// Sketch Title - for MuW201 Tangible Computing, 2019
// Firstname Lastname 
// GitHub Username
// Date 
 
let startAngle = 0;
let angleVel = 10;

function setup() {
  createCanvas(640, 500);
}

function draw() {
  background(0);

  startAngle += 0.020;
  let angle = startAngle;

  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(angle), 0, 1, 0, height);
    stroke(164);
    fill(255, 50);
    strokeWeight(2);
    line(x, y, 40, 40);
    line(-x, -y, 40, 40);

    angle += angleVel;
  }
}


