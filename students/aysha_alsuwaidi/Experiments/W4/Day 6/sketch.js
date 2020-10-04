let x = 0
function setup() {
  let canvas = createCanvas(windowWidth/3, windowWidth/3)
  canvas.parent('sketch-holder');


  }


function draw() {

 x=x-2;
 if (x< 1){
 	x= height/2;
 	x=width/10
 }
strokeWeight(1)
stroke(random(255),random(255),random(255))
line(200,width*8,x,x);
line(100,width/6,x,x);
line(height+2,100,x,x);
}