
  

  

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(255);
  translate(width/2,height/2);

  fill(0);
  

  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.5) {
    let r = random(100, 150);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);

  }
  endShape();




}