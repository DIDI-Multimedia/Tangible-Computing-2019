let x = 100
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {

 x=x-2;
 if (x< 1){
 	x= height;
 }

stroke(255)
line(2,width/2,x,x);
stroke(255)
line(10,width/6,x,x);
stroke(255)
line(width/10,100,x,x);
}