let x = 100
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {

 x=x-50;
 if (x< 0.5){
 	x= width;
 }

stroke(0)
line(2,width/2,mouseX,x);

line(10,width/6,x,x);

line(width/10,100,x,mouseY);
}