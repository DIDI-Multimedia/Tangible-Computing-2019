let x = 23
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {
background(0)
 x=x-200;
 if (x< 1){
 	x= height;
 }
noFill()
stroke(random(255),random(255),random(255))
ellipse(0,width/2,x,x);

ellipse(10,width/6,x,x);

ellipse(width/10,100,x,x);
}