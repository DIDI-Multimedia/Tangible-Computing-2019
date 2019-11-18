let a = 0.0;
let s = 0.0;

function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  

}

function draw(){


  a = a - 0.02;
  s = cos(a) * 1;
  translate(width / 2, height / 3);
      scale(s);
      stroke(0)
      fill(255,116,168)
      ellipse(0,0,100,100)

     
}