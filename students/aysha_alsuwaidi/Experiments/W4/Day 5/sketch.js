let a = 0.0;
let s = 0.0;
function setup() {
let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');
  

}

function draw(){
background(255)
  
 
  a = a + 0.02;
  s = cos(a) * 2;
  translate(width / 3, height / 3);
      scale(s);
      noFill()
      stroke(random(255),random(255),random(255))
      ellipse(0,0,50,50)

}



