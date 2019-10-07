
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


// function setup() {
// let canvas = createCanvas(windowWidth/1, windowWidth/2)
//   canvas.parent('sketch-holder');
//   capture = createCapture(VIDEO);
  

// }

// function draw(){
//   background(230,random(255),random(255),random(255));
//   image(capture, 100,50,1000, 500);
//   stroke(255)
// 	strokeWeight(70)
// 	ellipse(mouseX/2,mouseY/2,24,2)
  

// }
// >>>>>>> cce274124229c837dde04b2ed863913fe377d1b7
